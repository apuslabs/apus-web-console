'use client'

import Header from '@/components/header'
import {Layout, Menu} from "antd";
import {DatabaseOutlined, DesktopOutlined, MoneyCollectOutlined, ReadOutlined} from "@ant-design/icons";
import {useRouter} from "next/navigation";

const { Sider } = Layout

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router =  useRouter()
  return (
    <Layout className="h-screen flex flex-col">
      <div style={{ flexGrow: 0, flexShrink: 0 }}>
        <Header />
      </div>
      <div className={"flex-1 flex w-full"}>
        <Sider width={200} className={"h-full flex-0"}>
          <Menu mode="inline" defaultSelectedKeys={['guide']} style={{ height: '100%', borderRight: 0 }}
          items={[
            { key: 'docs/setup', icon: <ReadOutlined />, label: 'Guide' },
            { key: 'stats', icon: <DatabaseOutlined />, label: 'Stats' },
            { key: 'client', icon: <DesktopOutlined />, label: 'Client' },
            { key: 'billing', icon: <MoneyCollectOutlined />, label: 'Billing' },
          ]} onClick={(info) => {
              router.push(`/console/${info.key}`)
          }}/>
        </Sider>
        <Layout className={"flex-1"} style={{ padding: '24px', overflow: "scroll" }}>
        {children}
        </Layout>
      </div>
    </Layout>
  )
}
