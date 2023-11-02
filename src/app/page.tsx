'use client'

import SvgImage from "@/components/SvgImage"
import IconLogo from '@/assets/icons/logo.svg'
import Link from "next/link"
import { ReactNode, useEffect, useRef, useState } from "react"
import Image from 'next/image'
import { Exo_2 } from 'next/font/google'
import IndexBgHW from '@/assets/images/index-bg-hw.png'
import IndexBgRing from '@/assets/images/index-bg-ring.png'
import IconGithub from '@/assets/icons/github.svg'
import IconTwitter from '@/assets/icons/twitter.svg'
import IconTelegram from '@/assets/icons/telegram-fill.svg'
import IconMedium from '@/assets/icons/medium.svg'
import IconMail from '@/assets/icons/mail.svg'
import Advantage1 from '@/assets/images/advantages-1.png'
import Advantage2 from '@/assets/images/advantages-2.png'
import Advantage3 from '@/assets/images/advantages-3.png'
import Advantage4 from '@/assets/images/advantages-4.png'
// import TeamMemberBen from '@/assets/images/avatar/ben.png'
// import TeamMemberBill from '@/assets/images/avatar/bill.png'
// import TeamMemberChris from '@/assets/images/avatar/chris.png'
// import TeamMemberEthan from '@/assets/images/avatar/ethan.png'
// import TeamMemberHowell from '@/assets/images/avatar/howell.png'
// import TeamMemberJason from '@/assets/images/avatar/jason.png'
// import TeamMemberJax from '@/assets/images/avatar/jax.png'
// import TeamMemberJessy from '@/assets/images/avatar/jessy.png'
// import TeamMemberYijia from '@/assets/images/avatar/yijia.png'
import PartnerCosmos from '@/assets/icons/cosmos-logo.svg'
import PartnerEverVision from '@/assets/icons/everVision-logo.png'
import PartnerManta from '@/assets/icons/manta-logo.svg'
import PartnerPolygon from '@/assets/icons/polygon-logo.svg'
import PartnerScroll from '@/assets/icons/scroll-logo.svg'
import PartnerTaiko from '@/assets/icons/taiko-logo.svg'
import HistoryPPTV from '@/assets/icons/pptv-logo.png'
import HistoryPPIO from '@/assets/icons/ppio-logo.png'
import IconRightArrow from '@/assets/icons/icons8-right-arrow-100.png'

import ContactBG from '@/assets/images/contact-bg.png'
import cns from 'classnames'

const exo2 = Exo_2({ subsets: ['latin'], weight: ['600'] })

const menuItems: {
  item: ReactNode,
  href: string,
}[] = [
    {
      item: 'Docs',
      href: '/docs',
    },
    // {
    //   item: 'Partners',
    //   href: '/partners',
    // },
    // {
    //   item: 'Recuriment',
    //   href: '/recruitment',
    // },
    // {
    //   item: 'About',
    //   href: '/about',
    // }
  ]

function Header() {
  return <div className="fixed top-0 left-0 right-0 h-16 flex justify-center z-10 bg-dark">
    <div className="h-full flex items-center section-container">
      <div className='flex items-center mr-12'>
        <SvgImage src={IconLogo} alt="logo" />
        <h1 className='ml-3 text-2xl font-bold'>Apus Network</h1>
      </div>
      <ul className='nav-menu gap-24 justify-end m-24'>
        {menuItems.map(({ item, href }, index) =>
          <Link className='inline-flex' href={href} key={index}><li className='nav-link'>{item}</li></Link>
        )}
      </ul>
      <div>
        <Link href="/console/dashboard/market"><div className="btn-sign cursor-pointer">Console</div></Link>
      </div>
    </div>
  </div>
}

const contactItems = [
  { icon: IconTwitter, iconAlt: 'twitter', href: 'https://twitter.com/apus_network' },
  { icon: IconTelegram, iconAlt: 'telegram', href: 'https://t.me/+AWdHtLSl2m4yM2I1' },
  { icon: IconMedium, iconAlt: 'medium', href: 'https://medium.com/@apusnetwork' },
  { icon: IconGithub, iconAlt: 'github', href: "https://github.com/apusnetwork-official" },
  { icon: IconMail, iconAlt: 'mail', href: "mailto:team@apus.network" },
]


function Footer() {
  return <div className="fixed bottom-0 left-0 bg-dark right-0 h-16 flex items-center">
    <div className="h-full flex items-center section-container gap-4">
      {contactItems.map(({ icon, iconAlt, href }) => <Link key={iconAlt} href={href}><SvgImage size={32} src={icon} alt={iconAlt} /></Link>)}
    </div>
  </div>
}

function FootNote() {
  return <div className="fixed bottom-0 left-0 bg-dark right-0 h-16 flex items-center justify-center text-subtle-inverse">
    <div>Copyright © Apus.Network 2023. All rights reserved</div>
  </div>
}

function Contact() {
  return <div className="h-24 rounded-12 border border-solid border-slate-400 right-0 flex items-center px-12">
    <div className="h-full px-12 flex items-center section-container gap-24">
      {contactItems.map(({ icon, iconAlt, href }) => <Link key={iconAlt} href={href}><SvgImage size={46} src={icon} alt={iconAlt} /></Link>)}
    </div>
  </div>
}

function useElementOnScreen<T extends Element>(options?: IntersectionObserverInit) {
  const containerRef = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries
      setIsVisible(entry.isIntersecting)
    }, options)
    const currentElement = containerRef.current

    if (currentElement) observer.observe(currentElement)

    return () => {
      if (currentElement) observer.unobserve(currentElement)
    }
  }, [containerRef, options])

  return [containerRef, isVisible] as const
}

export default function Home() {
  const [containerRef, isVisible] = useElementOnScreen<HTMLElement>()

  return (
    <main className="bg-dark text-inverse">
      <Header />
      <section className="section-wrapper">
        <Image className="absolute left-0 top-0 h-full object-fit" src={IndexBgHW} alt="bg-ring" />
        <Image className="absolute right-0 object-contain top-1/2 -translate-y-1/2" src={IndexBgRing} alt="bg-ring" />
        <div className="flex flex-col items-center text-center mt-20" style={{
          maxWidth: '75rem',
        }}>
          <h1 className="text-7xl font-bold leading-tight">
            Decentralized ZKP compute marketplace
          </h1>
          <h2 className="w-4/5 text-subtle-inverse text-xl mt-8">
            Our mission is to <span className="text-strong">democratize compute</span> by building a <span className="text-strong">decentralized ZKP marketplace</span>, <br />transforming global compute resources into <span className="text-strong">accessible and affordable ZKP capabilities</span>.
          </h2>
          {/* <h4 className=" mt-28 text-inverse font-bold text-xl">
            The earlier you join, the greater the chance and probability of getting an airdrop
          </h4>
          <div className="mt-16 flex gap-5">
            <Button ghost size="large" className="px-10 font-bold h-16">SUPPLY COMPUTE</Button>
            <Button ghost size="large" className="px-10 font-bold h-16">ACCESS COMPUTE</Button>
          </div> */}
        </div>
      </section>
      <section className="section-wrapper">
        <div className="section-container">
          <h1 className="section-header">Advantages</h1>
          <div className="flex justify-center">
            {/* <Image className="absolute right-0 object-contain top-1/2 -translate-y-1/2 blur-sm" src={IndexBgRing} alt="bg-ring" /> */}
            <ul className="max-w-300 grid grid-rows-2 grid-cols-2 gap-40 reset">
              {[
                {
                  title: 'Liveness',
                  content: `Decentralized systems use multiple provers, ensuring the protocol operates reliably and doesn't face downtime if some provers are temporarily unavailable. This ensures continuous operation of the system.`,
                  img: Advantage1,
                },
                {
                  title: 'Censorship Resistance',
                  content: 'The more provers in a network, the greater the censorship resistance. This is important for maintaining the integrity of transactions and ensuring all valid transactions have an equal opportunity to be included.',
                  img: Advantage2,
                },
                {
                  title: 'Affordability',
                  content: 'Decentralization allows for the creation of third-party proof networks. Applications can outsource their proving to these networks, reducing the overhead for building and running ZK infrastructure. This can lead to cost savings and efficiency in development.',
                  img: Advantage3,
                },
                {
                  title: 'Failure Resilience',
                  content: `Decentralized systems distribute risk and do not have a single point of failure, significantly enhancing the system's resilience to faults or attacks.`,
                  img: Advantage4,
                }
              ].map(({ title, content, img }) => <li key={title} className="relative">
                <Image src={img} alt="advantage" width={277} height={247} className="absolute right-0 -top-20" />
                <h2 className="relative text-2xl font-bold z-10">{title}</h2>
                <p className="mt-6 text-subtle-inverse">{content}</p>
              </li>)}
            </ul>
          </div>
        </div>
      </section>
      <section className="section-wrapper">
        <div className="section-container">
          <h1 className="section-header">Why Us</h1>
          <div className="flex justify-center items-center gap-16">
            <div className="flex flex-col items-center">
              <div className="mb-4 text-2xl font-bold text-inverse">PPTV</div>
              <Image src={HistoryPPTV} height={64} alt="pptv" />
              <div className="mt-4 text-lg font-semibold text-subtle-inverse text-center">450MM Users<br />Worldwide</div>
            </div>
            <Image src={IconRightArrow} width={96} alt="" />
            <div className="flex flex-col items-center">
              <div className="mb-4 text-2xl font-bold text-inverse">PPIO</div>
              <Image src={HistoryPPIO} height={64} alt="ppio" />
              <div className="mt-4 text-lg font-semibold text-subtle-inverse text-center">5000 Nodes<br />Worldwide</div>
            </div>
            <Image src={IconRightArrow} width={96} alt="" />
            <div className="flex flex-col items-center">
              <div className="mb-4 text-2xl font-bold text-inverse">Apus</div>
              <Image src={IconLogo} height={64} alt="logo" />
              <div className="mt-4 text-lg font-semibold text-subtle-inverse text-center">Unlimited Compute<br />Worldwide</div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="section-wrapper">
        <div className="section-container">
          <h1 className="section-header">Teams</h1>
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-2 gap-32">
              {[
                {
                  avatar: TeamMemberBen,
                  name: 'Ben Li: CEO',
                  titles: [
                    'Microsoft U.S. Bing Search ',
                    'Serial Entrepreneurs',
                    'PPIO Founding Partner',
                    'PPFS Whitepaper',
                    'GenAI Enthusiasm',
                  ],
                },
                {
                  avatar: TeamMemberJason,
                  name: 'Jason: CTO',
                  titles: [
                    'PPTV, Alibaba & Ant Group',
                    'Serial Entrepreneur',
                    'Founding Team',
                  ]
                },
                {
                  avatar: TeamMemberBill,
                  name: 'Bill: Investor & Advisor',
                  titles: [
                    'PPTV founder',
                    'AI Entrepreneur Camp Founder',
                    'BlueRun Capital Partner',
                    'PPIO Cofounder',
                  ]
                },
                {
                  avatar: TeamMemberJessy,
                  name: 'Jessy Xie: Advisor',
                  titles: [
                    'ex Microsoft',
                    'Serial Entrepreneur',
                    'Protocol Lab (Filecoin) Engineering Director',]

                },
                {
                  avatar: TeamMemberJax,
                  name: 'Jax: Core Developer',
                  titles: [
                    'PPIO',
                    'Founding Team',
                  ]
                },
                {
                  avatar: TeamMemberEthan,
                  name: 'Ethan: Core Developer',
                  titles: [
                    'Didi Backend',
                    'Founding Team'
                  ]
                },
              ].map((item, index) => <TeamMember key={index} {...item} />)}
            </div>
            <div className="mt-32 grid grid-cols-3 gap-16">
              {[
                {
                  avatar: TeamMemberYijia,
                  name: 'Yijia: Community',
                  titles: [
                    'Core Dev Contributor',
                    'NUS AI Master',
                    'AI solution architect',
                  ]
                },
                {
                  avatar: TeamMemberHowell,
                  name: 'Howell: Community',
                  titles: [
                    'Core Dev Contributor',
                    'Microsoft Senior Developer',
                  ]
                },
                {
                  avatar: TeamMemberChris,
                  name: 'Chris: Community',
                  titles: [
                    'English Community Manager'
                  ]
                }
              ].map((item, index) => <TeamMember key={index} {...item} />)}
            </div>
          </div>
        </div>
      </section> */}
      <section className="section-wrapper">
        <div className="section-container">
          <h1 className="section-header">Partners</h1>
          <div className="flex flex-col items-center">
            <div className="py-16 grid grid-cols-3 gap-32">
              {[
                { img: PartnerTaiko, href: "https://taiko.xyz/" },
                { img: PartnerScroll, href: "https://scroll.io/" },
                { img: PartnerPolygon, href: "https://polygon.technology/home" },
                { img: PartnerManta, href: "https://manta.network/" },
                { img: PartnerEverVision, href: "https://ever.finance/#/" },
                { img: PartnerCosmos, href: "https://cosmos.network/" }
              ].map((item, index) => <Link key={index} href={item.href} prefetch={false} target="_blank"><Image src={item.img} alt="avatar" width={320} className="hover:scale-110 transition-all" /></Link>)}
            </div>
          </div>

        </div>
      </section>
      <section className="section-wrapper" ref={containerRef}>
        <Image src={ContactBG} alt="contact-bg" width={662} height={606} className="absolute left-0 bottom-0 rotate-12" />
        <div className="flex flex-col items-center">
          <div className="mb-4 font-bold text-6xl">Contact</div>
          {/* <div className="mb-4">Interested in Apus Network development, accessing GPU compute, supplving GPU compute, or have any questions?</div> */}
          <div className="mb-20 text-xl font-medium">{`Join the community and get involved! We'd love to meet you.`}</div>
          <Contact />
        </div>
      </section>
      <section className="section-wrapper">
        <h3 className={cns(exo2.className, "mb-52 text-5xl font-semibold text-subtle-inverse")}>Democratizing Compute is powered by the people and for the people!</h3>
      </section>
      {isVisible ? <FootNote /> : <Footer />}
    </main>
  )
}

function TeamMember({
  avatar,
  name,
  titles,
  className,
}: {
  avatar: any
  name: string
  titles: string[]
  className?: string
}) {
  return <div className={cns('flex gap-2 max-w-1/2', className)}>
    <Image src={avatar} alt="avatar" width={120} height={120} className="rounded-half" />
    <div>
      <div className="mg-2 font-bold text-2xl">{name}</div>
      <ul className="text-xl text-subtle-inverse leading-normal">
        {
          titles.map((title, index) => <li key={index}>{title}</li>)
        }
      </ul>
    </div>
  </div>
}