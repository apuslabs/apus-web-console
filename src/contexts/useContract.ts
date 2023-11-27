import {MarketContract, TaskContract, useWeb3Context} from "@/contexts/web3";
import {useEffect, useState} from "react";

export function useTotalClient(marketContract?: MarketContract) {
    const [totalClient, setTotalClient] = useState<number>(0)
    useEffect(() => {
        if (marketContract) {
            marketContract.methods.getClientCount().call<number>().then((count: number) => {
                setTotalClient(count)
            })
        }
    }, [marketContract])
    return totalClient
}

export function useAvailableClientCount(marketContract?: MarketContract) {
    const [availableClientCount, setAvailableClientCount] = useState<number>(0)
    useEffect(() => {
        if (marketContract) {
            marketContract.methods.getAvilableClientCount().call<number>().then((count: number) => {
                setAvailableClientCount(count)
            })
        }
    }, [marketContract])
    return availableClientCount
}

export interface Client {
    curInstance: number
    id: number
    maxZkEvmInstance: number
    minFee: number
    owner: string
    stat: number
    url: string
}

export function useUserClients(marketContract?: MarketContract) {
    const [userClients, setUserClients] = useState<any[]>([])
    const {account} = useWeb3Context()
    useEffect(() => {
        if (marketContract && account) {
            // @ts-ignore
            marketContract.methods.getUserClients(account).call<string[]>().then((clients: string[]) => {
                console.log(clients)
                setUserClients(clients)
            })
        }
    }, [marketContract, account])
    return userClients
}

export function useTaskCount(taskContract?: TaskContract) {
    const [taskCount, setTaskCount] = useState<number>(0)
    useEffect(() => {
        if (taskContract) {
            taskContract.methods.getTaskCount().call<number>().then((count: number) => {
                setTaskCount(count)
            })
        }
    }, [taskContract])
    return taskCount
}

export function useAssignedTaskCount(taskContract?: TaskContract) {
    const [assignedTaskCount, setAssignedTaskCount] = useState<number>(0)
    useEffect(() => {
        if (taskContract) {
            taskContract.methods.getAssignedTaskCount().call<number>().then((count: number) => {
                setAssignedTaskCount(count)
            })
        }
    }, [taskContract])
    return assignedTaskCount
}

export function useLatestTaskId(taskContract?: TaskContract) {
    const [latestTaskId, setLatestTaskId] = useState<number>(0)
    useEffect(() => {
        if (taskContract) {
            taskContract.methods.getLatestTaskId().call<number>().then((id: number) => {
                setLatestTaskId(id)
            })
        }
    }, [taskContract])
    return latestTaskId
}

export function useAvgReward(taskContract?: TaskContract) {
    const [avgReward, setAvgReward] = useState<number>(0)
    useEffect(() => {
        if (taskContract) {
            taskContract.methods.getAvgReward().call<number>().then((reward: number) => {
                setAvgReward(reward)
            })
        }
    }, [taskContract])
    return avgReward
}

export function useAvgProofTime(taskContract?: TaskContract) {
    const [avgProofTime, setAvgProofTime] = useState<number>(0)
    useEffect(() => {
        if (taskContract) {
            taskContract.methods.getAvgProofTime().call<number>().then((time: number) => {
                setAvgProofTime(time)
            })
        }
    }, [taskContract])
    return avgProofTime
}

export function useClientTasks(clientId: number | null, taskContract?: TaskContract) {
    const [clientTasks, setClientTasks] = useState<any[]>([])
    const {account} = useWeb3Context()
    useEffect(() => {
        if (taskContract && account && clientId) {
            // @ts-ignore
            taskContract.methods.getClientTasks(account, clientId).call<string[]>().then((tasks: string[]) => {
                setClientTasks(tasks)
            })
        }
    }, [taskContract, account, clientId])
    return clientTasks
}

export function useProverTasks(taskContract?: TaskContract) {
    const [proverTasks, setProverTasks] = useState<any[]>([])
    const {account} = useWeb3Context()
    useEffect(() => {
        if (taskContract && account) {
            // @ts-ignore
            taskContract.methods.getProverTasks(account).call<string[]>().then((tasks: string[]) => {
                setProverTasks(tasks)
            })
        }
    }, [taskContract, account])
    return proverTasks
}

export function useBalance(tokenContract?: TaskContract) {
    const [balances, setBalances] = useState<any[]>([])
    const {account} = useWeb3Context()
    useEffect(() => {
        if (tokenContract && account) {
            // @ts-ignore
            tokenContract.methods.balanceOf(account).call<string[]>().then((balances: string[]) => {
                setBalances(balances)
            })
        }
    }, [tokenContract, account])
    return balances
}