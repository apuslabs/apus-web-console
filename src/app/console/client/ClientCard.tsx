import {Card, Tooltip, Tag, Typography, Divider, Button, message, Popconfirm} from 'antd';
import {LinkOutlined, PlusOutlined, ArrowRightOutlined, DeleteOutlined, DesktopOutlined } from '@ant-design/icons';
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
                <div className={"text-xl"}><DesktopOutlined /><span className={"ml-2 text-sm text-secondary"}>ID: </span>{id.toString()}</div>
                <Button onClick={onClick} type={"link"}><div className={"flex items-center"}>Proof Logs <ArrowRightOutlined className={"ml-2"} /></div></Button>
            </div>
            <Divider />
            <div className={"mb-2"}>URL: {new URL(url.toString()).hostname} <LinkOutlined className={"cursor-pointer"} onClick={() => {
                navigator.clipboard.writeText(url.toString())
                message.success('URL Copied')
            }} /></div>
            <div className={"text-secondary text-xl mb-2"}>Fee: <span className={"text-primary"}>{minFee.toString()} wei</span></div>
            <div className={"mb-2 text-secondary"}>Avaiable Provers: <span className={"text-bold text-white"}>{(maxZkEvmInstance - curInstance).toString()} / {maxZkEvmInstance.toString()}</span></div>

            <Divider />
            <div className={"flex justify-between"}>
                <Tag color={stat == 0 ? 'green' : 'volcano'}>{stat == 0 ? 'Running' : 'Stopped'}</Tag>
                {stat == 0 ? <Popconfirm
                    title="Stop the Client"
                    description="Are you sure to stop this client?"
                    okButtonProps={{loading: loading}}
                    onConfirm={() => {
                        offlineClient(id).then(() => {
                            refreshList()
                        })
                    }}
                    okText="Yes"
                    showCancel={false}
                >
                    <Button danger size={"small"} loading={loading}
                            className={"flex items-center"}><DeleteOutlined/></Button>
                </Popconfirm> : null}
            </div>
        </Card>
    );
};

export const AddClientCard = ({ onClick }: {
    onClick?: () => void
}) => {
    return (
        <Card
            className={"h-full w-full"}
            bodyStyle={{ height: '100%' }}
            bordered={false}
            hoverable
        >
            <div
                className={"text-center flex flex-col justify-center items-center h-full"}>
                <Button type="primary" shape="circle" icon={<PlusOutlined />} size="large"
                        onClick={onClick} />
                <Text style={{ marginTop: 10 }}>Add Prover</Text>
            </div>
        </Card>
    );
};

export default ClientCard;