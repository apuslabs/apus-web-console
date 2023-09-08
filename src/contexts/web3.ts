'use client'

import { accountContractABI, accountContractAddress, helperContractABI, helperContractAddress } from "@/constant/contract";
import { createContext, useCallback, useEffect, useRef, useState } from "react";
import Web3, { Contract } from "web3";
import useSWR from 'swr'
import { CommonResponse, getFetcher } from "@/utils/fetcher";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const web3Context = createContext<ReturnType<typeof useWeb3Context>>(null!)

export const Web3ContextProvider = web3Context.Provider

export type AccountInfoResponse = {
    /**
     * 用户公钥地址
     */
    address: string;
    /**
     * 用户的金额, 是一个字符串形式的float "1.11", 单位是BNB
     */
    balance: string;
    /**
     * 是否是provider
     */
    is_provider: boolean;
    /**
     * 因provider质押的金额, 格式同balance
     */
    provider_blocked_funds: string;
    /**
     * provider的信息 @jax,  需要提供下
     */
    provider_info: { [key: string]: any };
    info: { [key: string]: any };
    /**
     * 租用机器质押的金额, 格式同balance
     */
    recipient_blocked_funds: string;
}

export type AccountContract = Contract<typeof accountContractABI>
export type HelperContract = Contract<typeof helperContractABI>

export function useWeb3Context() {
    const [hasMetamask, setHasMetamask] = useState(false)
    const [account, setAccount] = useState<string>("")
    const [balance, setBalance] = useState<string>("0.")
    const web3 = useRef<Web3>()
    const accountContract = useRef<AccountContract>()
    const helperContract = useRef<HelperContract>()
    const { data: accountInfo, isLoading, mutate: refreshAccountInfo } = useSWR<CommonResponse<AccountInfoResponse>>(account ? ['/apus/account/info', {
        address: account
    }] : null, getFetcher)
    const router = useRouter()
    const [isConnecting, setIsConnecting] = useState(false)

    const initWeb3 = useCallback((accounts: string[]) => {
        const account = Web3.utils.toChecksumAddress(accounts[0])
        setAccount(account)
        if (!web3.current) {
            web3.current = new window.Web3(window.ethereum)
            accountContract.current = new web3.current.eth.Contract(accountContractABI, accountContractAddress)
            helperContract.current = new web3.current.eth.Contract(helperContractABI, helperContractAddress)
        }
        web3.current.eth.getBalance(accounts[0]).then(b => {
            setBalance(Web3.utils.fromWei(b, 'ether'))
        })
        return {
            account,
            web3,
            accountContract,
            helperContract,
        }
    }, [web3, accountContract, helperContract])

    useEffect(() => {
        const isEthereumUndefined = typeof window.ethereum === 'undefined'
        setHasMetamask(!isEthereumUndefined)
        if (!isEthereumUndefined) {
            window.ethereum.request({ method: 'eth_accounts' }).then((accounts: string[]) => {
                if (accounts.length !== 0) {
                    initWeb3(accounts)
                }
            }).catch(console.error)
        }
    }, [initWeb3])

    useEffect(() => {
        window.ethereum.on('accountsChanged', (accounts: string[]) => {
            setAccount(account => {
                if (account != accounts[0]) {
                    return Web3.utils.toChecksumAddress(accounts[0])
                }
                return account
            })
        });
    }, [])

    const connectMetamask = useCallback(async () => {
        if (typeof window.ethereum !== 'undefined') {
            setIsConnecting(true)
            try {
                const accounts = await window.ethereum.request({
                    method: 'eth_requestAccounts',
                })
                const { web3, account, accountContract } = initWeb3(accounts)
                await accountContract.current?.methods.register().send({
                    from: account,
                }).on('error', console.error).on('confirmation', (e) => {
                    if (e.receipt.status === BigInt(1)) {
                        toast.success('Sing up successfully')
                        accountContract.current?.methods?.getAccount
                        refreshAccountInfo().then(() => {
                            router.push('/dashboard/market')
                        })
                    }
                })
            } catch (e) {
                console.error(e)
            } finally {
                setIsConnecting(false)
            }
        }
    }, [refreshAccountInfo, router, initWeb3])

    return { 
        hasMetamask, 
        isLogin: accountInfo?.code === 200,
        needLogin: !isLoading && accountInfo?.code === 400,
        connectMetamask,
        account,
        web3,
        accountContract: accountContract.current,
        helperContract: helperContract.current,
        balance,
        accountInfo: {
            balance: Web3.utils.fromWei(accountInfo?.data?.balance || '0', 'ether'),
            recipient_blocked_funds: Web3.utils.fromWei(accountInfo?.data?.recipient_blocked_funds || '0', 'ether'),
            provider_blocked_funds: Web3.utils.fromWei(accountInfo?.data?.provider_blocked_funds || '0', 'ether'),
        },
        isProvider: Boolean(accountInfo?.data?.info),
        refreshAccountInfo,
    }
}