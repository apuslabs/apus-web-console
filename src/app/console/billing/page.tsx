"use client"

import {Card, Col, Divider, Modal, Row, Statistic, Table, Tag, Tooltip} from "antd";
import {useWeb3Context} from "@/contexts/web3";
import {useBalance, useProverTasks} from "@/contexts/useContract";
import dayjs from "dayjs";
import {LinkOutlined, QuestionCircleOutlined} from "@ant-design/icons";
import { utils } from "web3"
import {useState} from "react";

function StatusExplainModal({ open, onClose }: { open: boolean, onClose: () => void }) {
    return <Modal title={"Status Explain"} open={open} onCancel={onClose} onOk={onClose} footer={null}>
        <Row className={"mb-1 mt-4"}>
            <Col span={6}><Tag color={"blue"}>Created</Tag></Col>
            <Col span={18} className={"text-secondary"}>The task has been created and is <span className={"text-subtle-inverse text-bold"}>awaiting assignment</span>. It&apos;s not yet in progress.</Col>
        </Row>
        <Row className={"mb-1"}>
            <Col span={6}><Tag color={"blue"}>Assigned</Tag></Col>
            <Col span={18} className={"text-secondary"}>The task is currently assigned and work on it. <span className={"text-subtle-inverse text-bold"}>Result is not yet submitted</span></Col>
        </Row>
        <Row className={"mb-1"}>
            <Col span={6}><Tag color={"green"}>Submitted</Tag></Col>
            <Col span={18} className={"text-secondary"}>The task has been completed and submitted. <span className={"text-subtle-inverse text-bold"}>It&apos;s currently under review or awaiting approval.</span></Col>
        </Row>
        <Row className={"mb-1"}>
            <Col span={6}><Tag color={"green"}>Paid</Tag></Col>
            <Col span={18} className={"text-secondary"}>The reward for the task has been <span className={"text-subtle-inverse text-bold"}>successfully disbursed to the assignee.</span></Col>
        </Row>
        <Row className={"mb-1"}>
            <Col span={6}><Tag color={"red"}>Penalized</Tag></Col>
            <Col span={18} className={"text-secondary"}>A penalty has been applied to this task due to non-compliance with standards or missed deadlines.</Col>
        </Row>
    </Modal>
}

export default function Billing() {
    const { balance,tokenContract, taskContract } = useWeb3Context()
    const aptBalance = useBalance(tokenContract.current)
    const tasks = useProverTasks(taskContract.current)
    const [statusExplainModal, setStatusExplainModal] = useState(false)
    return <div className={"flex flex-col items-center"}>
        <Card className={"mb-4 text-center"}><div className={"flex"}>
        <Statistic title={'ETH Balance'} value={balance.toString()}></Statistic>
        <Divider type={"vertical"} className={"h-16 mx-16"} />
        <Statistic title={'APT Balance'} value={utils.fromWei(aptBalance || 0, 'ether')}></Statistic></div></Card>
        <Table rowKey={"id"} columns={[
            { title: 'TaskId', dataIndex: 'uniqID', key: 'taskId', render: t => <div className={"flex items-center"}>{t.toString()} <Tooltip title="Tap to view block detail">
                    <div className={"ml-1"} onClick={() => {
                        window.open(`https://explorer.jolnir.taiko.xyz/search-results?q=${t}`, "_blank")
                    }}><LinkOutlined /></div>
                </Tooltip></div> },
            { title: 'Task Reward', key: 'rewardToken', render: (_: string, item) => <span>{item.reward.amount.toString()} wei({item.reward.token == 0 ? "eth-sepolia" : item.reward.token})</span> },
            { title: 'Apus Eagle Reward', key: 'rewardType', render: (_: string) => <span>1000</span> },
            { title: <>Status <QuestionCircleOutlined onClick={() => {
                setStatusExplainModal(true)
                }} /></>, key: 'Task Status', render: (_: string, item) => {
                    const statusText = ['Created', 'Assigned', 'Submitted', 'Paid', 'Slashed'][item._stat]
                    const tagColor = ['blue', 'blue', 'green', 'green', 'red'][item._stat]
                    return <Tag color={tagColor}>{statusText}</Tag>
            } },
            { title: 'Claim Time', dataIndex: 'proveTime', key: 'proveTime', render: (unix: number) => {
                if (unix == 0) { return null }
                return dayjs(Number(unix) * 1000).format('YYYY-MM-DD hh:mm:ss')
                } },
            ]}
            dataSource={[...tasks].reverse()}
            pagination={false}></Table>
        <StatusExplainModal open={statusExplainModal} onClose={() => { setStatusExplainModal(false) }} />
    </div>
}
