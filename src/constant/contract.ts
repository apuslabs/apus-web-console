import Web3 from "web3"
import {configRes} from './apus_network.config'
import { useState } from "react"
import { AccountContract, HelperContract } from "@/contexts/web3"
import dayjs from "dayjs"
import { getFetcher } from "@/utils/fetcher"
import { Price } from "./api"

export const accountContractAddress = Web3.utils.toChecksumAddress(configRes.data.contract_info[0].contract_address)
export const accountContractABI = configRes.data.contract_info[0].abi

export const helperContractAddress = Web3.utils.toChecksumAddress(configRes.data.contract_info[1].contract_address)
export const helperContractABI = configRes.data.contract_info[1].abi


export function useStake(contract?: AccountContract) {
	const [isStaking, setIsStaking] = useState(false)
	return {
		stake: (address: string, value: number) => new Promise((resolve, reject) => {
			if (!contract) {
				reject("contract is null")
			}
			setIsStaking(true)
			try {
				contract?.methods.stake().send({
					from: address,
					value: Web3.utils.toWei(value, 'ether')
				}).on('error', (error: any) => {
					reject(error)
				}).on('confirmation', (e) => {
					if (e.receipt.status === BigInt(1)) {
						resolve(e)
					} else {
						reject(e)
					}
				})
			} catch (e) {
				reject(e)
			} finally {
				setIsStaking(false)
			}
		}),
		isStaking
	}
}

export function useUnStake(contract?: AccountContract) {
	const [isUnStaking, setIsUnStaking] = useState(false)
	return {
		unstake: (address: string, value: number) => new Promise((resolve, reject) => {
			if (!contract) {
				reject("contract is null")
			}
			setIsUnStaking(true)
			try {
				contract?.methods.unstake(Web3.utils.toWei(value, 'ether')).send({
					from: address,
				}).on('error', (error: any) => {
					reject(error)
				}).on('confirmation', (e) => {
					if (e.receipt.status === BigInt(1)) {
						resolve(e)
					} else {
						reject(e)
					}
				})
			} catch (e) {
				reject(e)
			} finally {
				setIsUnStaking(false)
			}
		}),
		isUnStaking
	}
}

export function useRent(contract?: HelperContract) {
	const [isRenting, setIsRenting] = useState(false)
	return {
		rent: (address: string, server_id: number, endDate: dayjs.Dayjs) => new Promise((resolve, reject) => {
			if (!contract) {
				reject("contract is null")
			}
			setIsRenting(true)
			try {
				contract?.methods.rentServer(server_id, endDate.unix()).send({
					from: address,
				}).on('error', (error: any) => {
					reject(error)
				}).on('confirmation', (e) => {
					if (e.receipt.status === BigInt(1)) {
						resolve(e)
					} else {
						reject(e)
					}
				})
			} catch (e) {
				reject(e)
			} finally {
				setIsRenting(false)
			}
		}),
		isRenting
	}
}

export function useRenewal(contract?: HelperContract) {
	const [isRenewaling, setIsRenewaling] = useState(false)
	return {
		renewal: (address: string, server_id: number, endDate: dayjs.Dayjs) => new Promise((resolve, reject) => {
			if (!contract) {
				reject("contract is null")
			}
			setIsRenewaling(true)
			try {
				contract?.methods.RenewalLeaseServer(server_id, endDate.unix()).send({
					from: address,
				}).on('error', (error: any) => {
					reject(error)
				}).on('confirmation', (e) => {
					if (e.receipt.status === BigInt(1)) {
						resolve(e)
					} else {
						reject(e)
					}
				})
			} catch (e) {
				reject(e)
			} finally {
				setIsRenewaling(false)
			}
		}),
		isRenewaling
	}
}

export function useTerminateLease(contract?: HelperContract) {
	const [isTerminating, setIsTerminating] = useState(false)
	return {
		terminateLease: (address: string, server_id: number) => new Promise((resolve, reject) => {
			if (!contract) {
				reject("contract is null")
			}
			setIsTerminating(true)
			try {
				contract?.methods.terminateLease(server_id).send({
					from: address,
				}).on('error', (error: any) => {
					reject(error)
				}).on('confirmation', (e) => {
					if (e.receipt.status === BigInt(1)) {
						resolve(e)
					} else {
						reject(e)
					}
				})
			} catch (e) {
				reject(e)
			} finally {
				setIsTerminating(false)
			}
		}),
		isTerminating
	}
}

export function useUnList(contract?: HelperContract) {
	const [isUnListing, setIsUnListing] = useState(false)
	return {
		unList: (address: string, server_id: number) => new Promise((resolve, reject) => {
			setIsUnListing(true)
			try {
				contract?.methods.terminateInstance(server_id).send({
					from: address,
				}).on('error', (error: any) => {
					reject(error)
				}).on('confirmation', (e) => {
					if (e.receipt.status === BigInt(1)) {
						resolve(e)
					} else {
						reject(e)
					}
				})
			} catch (e) {
				reject(e)
			} finally {
				setIsUnListing(false)
			}
		}),
		isUnListing
	}
}

export function useOnline(contract?: HelperContract) {
	const [isOnlining, setIsOnlining] = useState(false)
	return {
		online: async (address: string, server_id: string, server_info: string, price: Price, endDate: dayjs.Dayjs) => {
			try {
				setIsOnlining(true)
				const server_price = Web3.utils.toWei(price.server_price, 'ether')
				const storage_price = Web3.utils.toWei(price.storage_price, 'ether')
				const upband_width = Web3.utils.toWei(price.upband_width, 'ether')
				const downband_width = Web3.utils.toWei(price.downband_width, 'ether')
				return new Promise((resolve, reject) => {
					try {
						contract?.methods.onlineServer(server_id, server_info, {
							serverPrice: server_price,
							storagePrice: storage_price,
							upbandWidth: upband_width,
							downbandWidth: downband_width
						}, dayjs().unix(), endDate.unix()).send({
							from: address,
						}).on('error', (error: any) => {
							reject(error)
						}).on('confirmation', (e) => {
							if (e.receipt.status === BigInt(1)) {
								resolve(e)
							} else {
								reject(e)
							}
						})
					} catch (e) {
						reject(e)
					}
				})
			} catch (e) {
				return Promise.reject(e)	
			} finally {
				setIsOnlining(false)
			}
		},
		isOnlining
	}
}