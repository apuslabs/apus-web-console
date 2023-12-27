'use client'

import { MARKET_CONTRACT, TASK_CONTRACT, TOKEN_CONTRACT, MARKET_QUERY_CONTRACT } from "@/constant/contract";
import { createContext, useCallback, useEffect, useRef, useState } from "react";
import type { Web3, Contract } from "web3";
import { useRouter } from "next/navigation";
import { toChecksumAddress, fromWei } from 'web3-utils'

const taikoChainConfig = {
    chainId: '0x28c5f',
    chainName: 'Taiko Jolnir L2',
    nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcUrls: ['https://rpc.jolnir.taiko.xyz'],
    blockExplorerUrls: ['https://explorer.jolnir.taiko.xyz'],
}

const sepoliaChainConfig = {
    chainId: '0xaa36a7',
    chainName: 'Sepolia',
    nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcUrls: ['https://rpc.sepolia.org'],
    blockExplorerUrls: ['https://sepolia.etherscan.io/'],
}

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

export type MarketContract = Contract<typeof MARKET_CONTRACT.abi>
export type TaskContract = Contract<typeof TASK_CONTRACT.abi>
export type TokenContract = Contract<typeof TOKEN_CONTRACT.abi>
export type MarketQueryContract = Contract<typeof MARKET_QUERY_CONTRACT.abi>

export const Web3jsLoadEvent = new EventTarget()

export function useWeb3Context() {
    const web3 = useRef<Web3>()
    const taiko = useRef<Web3>()
    const marketContract = useRef<MarketContract>()
    const taskContract = useRef<TaskContract>()
    const tokenContract = useRef<TokenContract>()
    const taikoMarketContract = useRef<MarketContract>()
    const taikoMarketQueryContract = useRef<MarketContract>()
    const taikoTaskContract = useRef<TaskContract>()
    const taikoTokenContract = useRef<TokenContract>()
    const [hasMetamask, setHasMetamask] = useState(false)
    const [account, setAccount] = useState<string>("")
    const [balance, setBalance] = useState<string>("0.")
    const router = useRouter()
    const [isInit, setIsInit] = useState(false)
    const [isConnecting, setIsConnecting] = useState(false)

    const [isTaiko, setIsTaiko] = useState(false)
    const switchTaiko = useCallback(async () => {
        if (window.ethereum !== undefined) {
            await window.ethereum
                .request({
                    method: 'wallet_addEthereumChain',
                    params: [taikoChainConfig],
                })
            await window.ethereum
                .request({
                    method: 'wallet_switchEthereumChain',
                    params: [
                        {
                            chainId: taikoChainConfig.chainId
                        },
                    ],
                })
            setIsTaiko(true)
        }
    }, [])

    const initAccount = async (requestAccount?: boolean) => {
        try {
            const accounts = await window.ethereum.request({
                method: requestAccount ? 'eth_requestAccounts' : 'eth_accounts',
            })
            if (!accounts?.length) {
                return { account: '', balance: '0' }
            }
            const account = toChecksumAddress(accounts[0])
            setAccount(account)
            const balance = await window.ethereum.request({
                method: 'eth_getBalance',
                params: [account, 'latest']
            })
            const etherBalance = fromWei(balance, 'ether')
            setBalance(etherBalance)
            return {
                account,
                balance: etherBalance,
            }
        } catch (e) {
            console.error(e)
            return { account: '', balance: '0' }
        } finally {
             setIsInit(true)
        }
    }

    const connectMetamask = useCallback(async () => {
        setIsConnecting(true)
        try {
            initAccount(true)
            router.push('/console/client')
        } catch (e) {
            console.error(e)
        } finally {
            setIsConnecting(false)
        }
    }, [router])

    useEffect(() => {
        const initWeb3 = () => {
            if (window.Web3) {
                web3.current = new window.Web3(window.ethereum)
                marketContract.current = new web3.current.eth.Contract(MARKET_CONTRACT.abi, MARKET_CONTRACT.address)
                taskContract.current = new web3.current.eth.Contract(TASK_CONTRACT.abi, TASK_CONTRACT.address)
                tokenContract.current = new web3.current.eth.Contract(TOKEN_CONTRACT.abi, TOKEN_CONTRACT.address)
                taiko.current = new window.Web3(new window.Web3.providers.HttpProvider(taikoChainConfig.rpcUrls[0]))
                taikoMarketContract.current = new taiko.current.eth.Contract(MARKET_CONTRACT.abi, MARKET_CONTRACT.address)
                taikoMarketQueryContract.current = new taiko.current.eth.Contract(MARKET_QUERY_CONTRACT.abi, MARKET_QUERY_CONTRACT.address)
                taikoTaskContract.current = new taiko.current.eth.Contract(TASK_CONTRACT.abi, TASK_CONTRACT.address)
                taikoTokenContract.current = new taiko.current.eth.Contract(TOKEN_CONTRACT.abi, TOKEN_CONTRACT.address)
                web3.current.eth.getChainId().then((chainId) => {
                    setIsTaiko(chainId === BigInt(taikoChainConfig.chainId))
                })
            }
        }
        if (window.ethereum !== undefined) {
            setHasMetamask(true)
            initAccount()
            initWeb3()
        }
        Web3jsLoadEvent.addEventListener('load', initWeb3);
        window.ethereum?.on('accountsChanged', () => {
            initAccount()
        });
        return () => {
            window.ethereum.removeAllListeners('accountsChanged')
            Web3jsLoadEvent.removeEventListener('load', initWeb3)
        }
    }, [])

    return {
        refreshAccount: initAccount,
        hasMetamask,
        connectMetamask,
        account,
        balance,
        web3,
        isInit,
        marketContract,
        taskContract,
        tokenContract,
        isConnecting,
        isTaiko,
        switchTaiko,
        switchSepolia,
        addAPEToken,
        taikoMarketContract,
        taikoTaskContract,
        taikoTokenContract,
        taikoMarketQueryContract,
    }
}

export const switchTaiko = async () => {
    if (window.ethereum !== undefined) {
        await window.ethereum
            .request({
                method: 'wallet_addEthereumChain',
                params: [taikoChainConfig],
            })
        await window.ethereum
            .request({
                method: 'wallet_switchEthereumChain',
                params: [
                    {
                        chainId: taikoChainConfig.chainId
                    },
                ],
            })
    }
}

export const switchSepolia = async () => {
    if (window.ethereum !== undefined) {
        await window.ethereum
            .request({
                method: 'wallet_addEthereumChain',
                params: [sepoliaChainConfig],
            })
        await window.ethereum
            .request({
                method: 'wallet_switchEthereumChain',
                params: [
                    {
                        chainId: sepoliaChainConfig.chainId
                    },
                ],
            })
    }
}

export const addAPEToken = async () => {
    if (window.ethereum !== undefined) {
        await switchTaiko()
        await window.ethereum
            .request({
                method: 'wallet_watchAsset',
                params: {
                    type: 'ERC20',
                    options: {
                        address: TOKEN_CONTRACT.address,
                        symbol: 'APE',
                        decimals: 18,
                    },
                },
            })
    }
}