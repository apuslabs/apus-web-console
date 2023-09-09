'use client'

import { ArrowRight, ArrowRightAlt } from "@mui/icons-material"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import cns from 'classnames'
import { useWeb3Context, web3Context } from "@/contexts/web3"
import { useContext, useEffect } from "react"
import path from "path"


export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    const {
        isProvider
    } = useContext(web3Context)
    useLoginGuard()
    const menus = isProvider ? [
        {
            label: 'Market',
            href: '/dashboard/market'
        },
        {
            label: 'Account',
            href: '/dashboard/account'
        },
        {
            label: 'Billing',
            href: '/dashboard/billing'
        },
        {
            label: 'Earning',
            href: '/dashboard/earning'
        },
        {
            label: 'Instances',
            href: '/dashboard/instances'
        },
        {
            label: 'Machines',
            href: '/dashboard/machines'
        }
    ] : [
        {
            label: 'Market',
            href: '/dashboard/market'
        },
        {
            label: 'Account',
            href: '/dashboard/account'
        },
        {
            label: 'Billing',
            href: '/dashboard/billing'
        },
        {
            label: 'Instances',
            href: '/dashboard/instances'
        },
    ]
    return (
        <div className="grid grid-cols-1" style={{
            gridTemplateColumns: '15rem 1fr',
            height: 'calc(100vh - 4rem)'
        }}>
            <div className="flex flex-col p-5 border-0 border-r border-solid border-slate-200 w-60 gap-5">
                {menus.map(({ label, href }) => {
                    return <Link key={label} href={href}><div className={cns("rounded bg-default text-main hover:text-primary hover:bg-light px-3 py-2 font-bold flex justify-between items-center", href === pathname && "text-primary bg-light")}>
                        <span>{label}</span>
                        <ArrowRight color="primary" />
                    </div></Link>
                })}
            </div>
            {children}
        </div>
    )
}

function useLoginGuard() {
    const router = useRouter()
    const pathname = usePathname()
    const {
        needLogin
    } = useWeb3Context()

    useEffect(() => {
        if (pathname !== '/signin' && needLogin) {
            router.push('/signin')
        }
    }, [needLogin, pathname, router])
}