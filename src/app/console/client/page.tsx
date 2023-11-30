"use client"

import {Col, Drawer, Form, Input, List, Modal, Row, Tag, Tooltip, message} from "antd";
import ClientCard, {AddClientCard} from "./ClientCard";
import {useClientTasks, useJoinMarket, useUserClients} from "../../../contexts/useContract";
import {useWeb3Context} from "../../../contexts/web3";
import {useState} from "react";
import { unix } from "dayjs";
import { useForm } from "antd/es/form/Form";
import { LinkOutlined, QuestionCircleOutlined } from "@ant-design/icons";

export default function Client() {
    const {marketContract} = useWeb3Context()
    const clients = useUserClients(marketContract.current)
    const [curClient, setCurClient] = useState<number | null>(null)
    const [addClientModal, setAddClientModal] = useState(false)
    return <>
        <Row gutter={[16, 16]}>
            {clients.map((client) =>
                <Col key={client.id} span={12}><ClientCard {...client} onClick={() => {
                    setCurClient(client.id)
                }} /></Col>)
            }
            <Col span={6}>
                <AddClientCard onClick={() => {setAddClientModal(true)}} />
            </Col>
        </Row>
        <ProofDrawer open={curClient != null} onClose={() => {
            setCurClient(null)
        }} clientId={curClient} />
        <AddClientModal
            onAdd={() => {
                setAddClientModal(false)
            }}
            onClose={() => {
                setAddClientModal(false)
            }}
            open={addClientModal}
        />
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
    return <Drawer title={"Proof Logs"} open={open} onClose={onClose}>
        <List bordered={false} dataSource={tasks} renderItem={(item: any) => {
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
                <div className={"text-2xl font-semibold flex items-center"}>{item.uniqID.toString()} {statusText} <Tooltip title="Tap to view block detail">
                    <div onClick={() => {
                        window.open(`https://explorer.jolnir.taiko.xyz/search-results?q=${item.uniqID}`, "_blank")
                    }}><LinkOutlined /></div>
                </Tooltip></div>
                <div className={"text-sm text-subtle-inverse"}>{unix(Number(item.assignTime)).format('YYYY-MM-DD hh:mm:ss')}</div>
                <div>Rewards({item.reward?.token == 0 ? 'eth' : item.reward?.token.substring(0, 8)}): <span className={"font-bold"}>{item.reward?.amount.toString()} wei</span> </div>
            </List.Item>
        }}>
        </List>
    </Drawer>
}

function AddClientModal({
    onClose,
    open,
    onAdd
}: {
    onClose: () => void,
    open: boolean,
    onAdd: () => void
}) {
    const [form] = useForm()
    const { marketContract } = useWeb3Context()
    const {joinMarket, loading} = useJoinMarket(marketContract.current)
    return <Modal title={"Join Market"} open={open} onCancel={onClose} confirmLoading={loading} onOk={async () => {
        const v = await form.validateFields()
        await joinMarket(v)
        onClose()
    }}>
        <Form form={form} labelCol={{span: 6}}>
            <Form.Item label={"Client URL"} name={"url"} required rules={
                [
                    {
                        validator: async (_, value) => {
                            if (!value) {
                                return Promise.reject("Please input client url")
                            }
                            if (!value.startsWith("http://") && !value.startsWith("https://")) {
                                return Promise.reject("Client url must start with http:// or https://")
                            }
                            return Promise.resolve()
                        }
                    }
                ]
            }>
                <Input type="text" />
            </Form.Item>
            <Form.Item label={"Min Fee"} name={"minFee"} required rules={
                [
                    {
                        validator: async (_, value) => {
                            if (!value) {
                                return Promise.reject("Please input min fee")
                            }
                            if (Number(value) <= 0) {
                                return Promise.reject("Min fee must be positive")
                            }
                            return Promise.resolve()
                        }
                    }
                ]
            }>
                <Input type="number" min={0} step={1} placeholder={"10"} />
            </Form.Item>
            <Form.Item label={<div>Max Instance <Tooltip title={"Requried 8c16g for each prover\nFor example:\n8c16g -> 1,16c32g -> 2\n12c16g -> 1,8c32g -> 1"}><QuestionCircleOutlined /></Tooltip></div>} name={"maxZkEvmInstance"} required rules={
                [
                    {
                        validator: async (_, value) => {
                            if (!value) {
                                return Promise.reject("Please input max instance")
                            }
                            if (Number(value) <= 0) {
                                return Promise.reject("Max instance must be positive")
                            }
                            return Promise.resolve()
                        }
                    }
                ]
            }>
                <Input type="number" min={0} step={1} placeholder={"1"} />
            </Form.Item>
        </Form>
    </Modal>
}