'use client'

import Header from '@/components/header'
import {Layout, Menu} from "antd";
import {DesktopOutlined, MoneyCollectOutlined, ReadOutlined} from "@ant-design/icons";
import {useRouter, usePathname} from "next/navigation";
import { useWeb3Context } from '@/contexts/web3';
import { useEffect } from 'react';

const { Sider } = Layout

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const router =  useRouter()
    const { account, isTaiko, isInit } = useWeb3Context()
    useEffect(() => {
        if (isInit && (!account || !isTaiko)) {
            router.push('/signin')
        }
    }, [account, isTaiko, isInit]);

    const pathname = usePathname()

  return (
    <Layout className="h-screen flex flex-col">
      <div style={{ flexGrow: 0, flexShrink: 0 }}>
        <Header />
      </div>
      <div className={"flex-1 flex w-full"}>
        <Sider width={200} className={"h-full flex-0"}>
          {/*// @ts-ignore*/}
          <Menu mode="inline" defaultSelectedKeys={['guide']} selectedKeys={
              [pathname === '/console/client' && 'client', pathname === '/console/billing' && 'billing'].filter(Boolean)
          } style={{ height: '100%', borderRight: 0 }}
          items={[
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
