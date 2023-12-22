"use client"

import Header from "@/components/header";
import {Layout, Menu, Typography} from "antd";
import Sider from "antd/es/layout/Sider";
import {usePathname, useRouter} from "next/navigation";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <LayoutWithHeader>
      <Typography className="max-w-3xl mx-auto text-white">{children}</Typography>
    </LayoutWithHeader>
  );
}

function LayoutWithHeader({ children }: { children: React.ReactNode}) {
    const router =  useRouter()
    const pathname = usePathname()

    return <Layout className="h-screen flex flex-col">
        <div style={{ flexGrow: 0, flexShrink: 0 }}>
            <Header showConsole />
        </div>

        <div className={"flex-1 flex w-full"} style={{ overflow: "scroll" }}>
            <Sider width={200} className={"h-full flex-0"}>
                {/*// @ts-ignore*/}
                <Menu mode="inline" defaultSelectedKeys={['guide']} selectedKeys={
                    [
                        pathname === '/docs/prerequisites' && 'prerequisites',
                        pathname === '/docs/wallet' && 'wallet',
                        pathname === '/docs/setup' && 'setup',
                        pathname === '/docs/tokennomics' && 'tokennomics',
                        pathname === '/docs/faq' && 'faq',
                    ].filter(Boolean)
                } style={{ height: '100%', borderRight: 0 }}
                      items={[
                            { key: 'prerequisites', label: 'Prerequisites' },
                            { key: 'wallet', label: 'Setup Wallet' },
                            { key: 'setup', label: 'Join Apus' },
                            { key: 'tokennomics', label: 'Tokenomics' },
                            { key: 'faq', label: 'FAQ' },
                      ]} onClick={(info) => {
                    router.push(`/docs/${info.key}`)
                }}/>
            </Sider>
            <Layout className={"p-6"} style={{ padding: '24px', overflow: "scroll" }}>
                {children}
            </Layout>
        </div></Layout>
}