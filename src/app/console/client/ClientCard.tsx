import {Card, Tooltip, Tag, Typography, Divider, Button, message, Popconfirm} from 'antd';
import {LinkOutlined, PlusOutlined, ArrowRightOutlined, DeleteOutlined } from '@ant-design/icons';
import { useWeb3Context } from '@/contexts/web3';
import { useOfflineClient } from '@/contexts/useContract';
const { Text} = Typography;

const ClientCard = ({ id, url, minFee, maxZkEvmInstance, curInstance, stat, onClick, refreshList }: {
    id: string,
    url: string,
    minFee: number,
    maxZkEvmInstance: number,
    curInstance: number,
    stat: number,
    onClick?: () => void,
    refreshList: () => void,
}) => {
    const { marketContract } = useWeb3Context()
    const { offlineClient, loading } = useOfflineClient(marketContract.current)
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
            <div className={"flex justify-between"}>
                <Button onClick={onClick} type={"dashed"}><div className={"flex items-center"}>Proofs <ArrowRightOutlined className={"ml-2"} /></div></Button>
                <Popconfirm
                    title="Stop the Client"
                    description="Are you sure to stop this client?"
                    okButtonProps={{ loading: loading }}
                    onConfirm={() => {
                        offlineClient(id).then(() => {
                            refreshList()
                        })
                    }}
                    okText="Yes"
                    showCancel={false}
                >
                    <Button type={"default"} danger loading={loading}><div className={"flex items-center"}>Delete <DeleteOutlined className={"ml-2"} /></div></Button>
                </Popconfirm>
            </div>
        </Card>
    );
};

export const AddClientCard = ({ onClick }: {
    onClick?: () => void
}) => {
    return (
        <Card
            className={"h-full"}
            bodyStyle={{ height: '100%' }}
            bordered={false}
            hoverable
        >
            <div
                className={"text-center flex flex-col justify-center items-center h-full"}>
                <Button type="primary" shape="circle" icon={<PlusOutlined />} size="large"
                        onClick={onClick} />
                <Text style={{ marginTop: 10 }}>添加新客户端</Text>
            </div>
        </Card>
    );
};

export default ClientCard;