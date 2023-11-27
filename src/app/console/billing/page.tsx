"use client"

import {Card, Divider, Statistic, Table, Tag} from "antd";
import {useWeb3Context} from "@/contexts/web3";
import {useBalance, useProverTasks} from "@/contexts/useContract";
import dayjs from "dayjs";

export default function Billing() {
    const { balance,tokenContract, taskContract } = useWeb3Context()
    const aptBalance = useBalance(tokenContract.current)
    const tasks = useProverTasks(taskContract.current)
    console.log(tasks)
    return <div className={"flex flex-col items-center"}>
        <Card className={"mb-4 text-center"}><div className={"flex"}>
        <Statistic title={'ETH Balance'} value={balance.toString()}></Statistic>
        <Divider type={"vertical"} className={"h-16 mx-16"} />
        <Statistic title={'APT Balance'} value={aptBalance.toString()}></Statistic></div></Card>
    <Table columns={[
        { title: 'TaskId', dataIndex: 'id', key: 'taskId', render: t => t.toString() },
        { title: 'Reward', key: 'rewardToken', render: (_: string, item) => <span>{item.reward.amount.toString()}</span> },
        { title: 'Reward Type', key: 'rewardType', render: (_: string, item) => <span>{item.reward.token}</span> },
        { title: 'Status', key: 'status', render: (_: string, item) => {
                let statusText
                if (item.proveTime != 0) {
                    statusText = <Tag color={"green"}>Proved</Tag>
                }
                else if (item.expiry < Date.now() / 1000) {
                    statusText = <Tag color={"red"}>Expired</Tag>
                }
                else {
                    statusText = <Tag color={"blue"}>Pending</Tag>
                }
                return statusText
            } },
        { title: 'Claim Time', dataIndex: 'proveTime', key: 'proveTime', render: (unix: number) => {
            if (unix == 0) { return null }
            return dayjs(unix * 1000).format('YYYY-MM-DD hh:mm:ss')
            } },
    ]}
       dataSource={tasks}
   pagination={false}></Table>
    </div>
}
