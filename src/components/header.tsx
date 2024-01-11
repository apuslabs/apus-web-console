"use client";

import IconLogo from "@/assets/icons/logo.svg";
import IconTelegram from "@/assets/icons/telegram";
import IconMetamask from "@/assets/icons/metamask-icon.svg";
import React, { ReactNode, useContext } from "react";
import Link from "next/link";
import SvgImage from "./SvgImage";
import { web3Context } from "@/contexts/web3";
import Image from "next/image";
import useWindowSize from "@/lib/useWindowSize";
import classNames from "classnames";

const menuItems: {
  item: ReactNode;
  href: string;
}[] = [
  {
    item: "Docs",
    href: "/docs/setup",
  },
  // {
  //   item: "Stats",
  //   href: "/stats",
  // },
];

export default function Header({
  showConsole,
  autoHideMenu,
  fullWidth,
}: {
  showConsole?: boolean;
  autoHideMenu?: boolean;
  fullWidth?: boolean;
}) {
  const { width } = useWindowSize();
  return (
    <header className="w-full flex justify-center bg-dark text-base text-inverse h-16">
      <div
        className={classNames(
          "w-full h-full flex justify-between items-center",
          fullWidth ? "px-5" : "section-container"
        )}
      >
        <Link className="flex items-center" href="/">
          <SvgImage src={IconLogo} alt="logo" />
          <h1 className="ml-3 text-2xl font-bold text-inverse">Apus Network</h1>
        </Link>
        {autoHideMenu && width < 768 ? null : (
          <ul className="nav-menu">
            {menuItems.map(({ item, href }, index) => (
              <Link className="inline-flex" href={href} key={index}>
                <li className="text-subtle-inverse hover:text-inverse cursor-pointer">
                  {item}
                </li>
              </Link>
            ))}
          </ul>
        )}
        <Link
          className="mr-6 inline-flex text-subtle-inverse hover:text-inverse cursor-pointer"
          href="https://t.me/apus_network"
        >
          {IconTelegram}
        </Link>
        <div>
          <UserMenu showConsole={showConsole} />
        </div>
      </div>
    </header>
  );
}

export function SimpleHeader() {
  const { width } = useWindowSize();
  return (
    <div className="fixed top-0 left-0 right-0 h-16 flex z-20 bg-dark">
      <div className="h-full flex items-center justify-between section-container">
        <div className="flex items-center flex-0 mr-4 md:mr-12">
          <div className="scale-75 md:scale-100">
            <SvgImage src={IconLogo} alt="logo" />
          </div>
          <h1 className="ml-3 text-lg md:text-2xl font-bold">Apus Network</h1>
        </div>
        {width >= 768 ? (
          <ul className="nav-menu gap-24">
            {menuItems.map(({ item, href }, index) => (
              <Link className="inline-flex" href={href} key={index}>
                <li className="nav-link">{item}</li>
              </Link>
            ))}
          </ul>
        ) : null}
        <div>
          {/* <Link href="/console/client"><div className="btn-sign cursor-pointer">Console</div></Link> */}
        </div>
      </div>
    </div>
  );
}

function UserMenu({ showConsole }: { showConsole?: boolean }) {
  const { account } = useContext(web3Context);

  return (
    <div className="h-full flex items-center">
      {showConsole ? // <Link href="/console/client">
      //   <div className="btn-sign">Console</div>
      // </Link>
      null : account ? (
        <div className="flex items-center">
          <Image
            src={IconMetamask.src}
            width={32}
            height={32}
            alt="metamask-icon"
          />
          <div className="ml-3">{account}</div>
          {/*<div className="divider-verticle mx-3"></div>*/}
        </div>
      ) : (
        <Link href="/signin">
          <div className="btn-sign">Sign In</div>
        </Link>
      )}
    </div>
  );
}
