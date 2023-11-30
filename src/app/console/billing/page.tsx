"use client"

import {Card, Divider, Statistic, Table, Tag, Tooltip} from "antd";
import {useWeb3Context} from "../../../contexts/web3";
import {useBalance, useProverTasks} from "../../../contexts/useContract";
import dayjs from "dayjs";
import { LinkOutlined } from "@ant-design/icons";

export default function Billing() {
    const { balance,tokenContract, taskContract } = useWeb3Context()
    const aptBalance = useBalance(tokenContract.current)
    const tasks = useProverTasks(taskContract.current)
    return <div className={"flex flex-col items-center"}>
        <Card className={"mb-4 text-center"}><div className={"flex"}>
        <Statistic title={'ETH Balance'} value={balance.toString()}></Statistic>
        <Divider type={"vertical"} className={"h-16 mx-16"} />
        <Statistic title={'APT Balance'} value={aptBalance.toString()}></Statistic></div></Card>
        <Table rowKey={"id"} columns={[
            { title: 'TaskId', dataIndex: 'uniqID', key: 'taskId', render: t => <div>{t.toString()} <Tooltip title="Tap to view block detail">
                    <div onClick={() => {
                        window.open(`https://explorer.jolnir.taiko.xyz/search-results?q=${t}`, "_blank")
                    }}><LinkOutlined /></div>
                </Tooltip></div> },
            { title: 'Task Reward', key: 'rewardToken', render: (_: string, item) => <span>{item.reward.amount.toString()} wei({item.reward.token == 0 ? "eth" : item.reward.token})</span> },
            { title: 'APT Reward', key: 'rewardType', render: (_: string, item) => <span>1000 wei</span> },
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
                return dayjs(Number(unix) * 1000).format('YYYY-MM-DD hh:mm:ss')
                } },
            ]}
            dataSource={tasks}
            pagination={false}></Table>
    </div>
}
