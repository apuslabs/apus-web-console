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
    <Layout className="h-screen">
      <Layout style={{ flexGrow: 0 }}>
        <Header />
      </Layout>
      <Layout>
        <Sider width={200}>
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
        <Layout style={{ padding: '24px', overflow: "scroll" }}>
        {children}
        </Layout>
      </Layout>
    </Layout>
  )
}
