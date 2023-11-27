"use client"

import {Col, Drawer, List, Row, Tag} from "antd";
import ClientCard, {AddClientCard} from "@/app/console/client/ClientCard";
import {useClientTasks, useUserClients} from "@/contexts/useContract";
import {useWeb3Context} from "@/contexts/web3";
import {useState} from "react";
import dayjs from "dayjs";

export default function Client() {
    const {marketContract} = useWeb3Context()
    const clients = useUserClients(marketContract.current)
    const [curClient, setCurClient] = useState<number | null>(null)
    return <>
        <Row gutter={16}>
            <Col span={6}>
                {clients.map((client) =>
                    <ClientCard key={client.id} {...client} onClick={() => {
                        setCurClient(client.id)
                    }} />)
                }
            </Col>
            <Col span={6}>
                <AddClientCard />
            </Col>
        </Row>
        <ProofDrawer open={curClient != null} onClose={() => {
            setCurClient(null)
        }} clientId={curClient} />
    </>
}

function ProofDrawer({
    open,
    onClose,
    clientId
                }: {
    open: boolean,
    onClose: () => void
    clientId: number | null
}) {
    const { taskContract } = useWeb3Context()
    const tasks = useClientTasks(clientId, taskContract.current)
    return <Drawer title={"Proofs"} open={open} onClose={onClose}>
        <List bordered={false} dataSource={tasks} renderItem={item => {
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

            return <List.Item className={"flex flex-col items-start"}>
                <div className={"text-2xl font-semibold"}>{item.uniqID.toString()} {statusText}</div>
                <div className={"text-sm text-subtle-inverse"}>{dayjs.unix(Number(item.assignTime)).format('YYYY-MM-DD hh:mm:ss')}</div>
                <div>Rewards({item.reward?.token.substring(0, 8)}): <span className={"font-bold"}>{item.reward?.amount.toString()}</span> </div>
            </List.Item>
        }}>

        </List>
    </Drawer>
}
