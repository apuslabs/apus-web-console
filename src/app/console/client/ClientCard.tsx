import React from 'react';
import {Card, Tooltip, Tag, Typography, Divider, Button, message} from 'antd';
import {LinkOutlined, PlusOutlined, ArrowRightOutlined } from '@ant-design/icons';
const { Text} = Typography;

const ClientCard = ({ id, url, minFee, maxZkEvmInstance, curInstance, stat, onClick }: {
    id: string,
    url: string,
    minFee: number,
    maxZkEvmInstance: number,
    curInstance: number,
    stat: number,
    onClick?: () => void
}) => {
    console.log(id, url, minFee, maxZkEvmInstance, curInstance, stat, onClick)
    return (
        <Card bordered={false}>
            <div className={"flex justify-between items-center"}>
                <div className={" text-2xl"}>{id.toString()} <Tooltip title="Tap to copy URL">
                    <Button type="link" icon={<LinkOutlined />} onClick={() => {
                        navigator.clipboard.writeText(url.toString())
                        message.success('Copied!')
                    }} />
                </Tooltip></div>
                <Tag color={stat == 0 ? 'green' : 'volcano'}>{stat == 0 ? 'Running' : 'Stopped'}</Tag>
            </div>
            <Divider />
            <Tag color="blue" className={"text-3xl mb-2"}>{minFee.toString()} wei</Tag>
            <div className={"mb-2"}><span className={"text-green-700"}>{curInstance.toString()}</span><span className={"text-zinc-500"}> / {maxZkEvmInstance.toString()}</span></div>
            <Button onClick={onClick}>Proofs <ArrowRightOutlined /></Button>
        </Card>
    );
};

export const AddClientCard = () => {
    return (
        <Card
            bordered={false}
            hoverable
        >
            <div
                className={"text-center flex flex-col justify-center items-center h-full"}>
                <Button type="primary" shape="circle" icon={<PlusOutlined />} size="large" />
                <Text style={{ marginTop: 10 }}>添加新客户端</Text>
            </div>
        </Card>
    );
};

export default ClientCard;