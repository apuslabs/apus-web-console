"use client";

import Header from "@/components/header";
import IconMetamask from "../../assets/icons/metamask-icon.svg";
import { web3Context } from "../../contexts/web3";
import { Button, Checkbox, Layout } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import {useRouter} from "next/navigation";

export default function SignInPage() {
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);
  const { hasMetamask, connectMetamask, isConnecting, isTaiko, switchTaiko, isInit, account } =
    useContext(web3Context);
  const isBtnDisabled = !isAgreementChecked || !hasMetamask;

  const router = useRouter()

    useEffect(() => {
        if (isInit && account && isTaiko) {
            router.push('/console/client')
        }
    }, [account, isTaiko, isInit, router]);

  return (<LayoutWithHeader>
    <div className="flex flex-col items-center pt-36 mx-auto">
      <Image
        src={IconMetamask.src}
        width={180}
        height={180}
        alt="metamask-icon"
      />
      <Button
        className="mt-5 mb-3 btn-primary h-14 rounded-7 text-base px-9"
        disabled={isBtnDisabled}
        loading={isConnecting}
        onClick={() => {
          isTaiko ? connectMetamask() : switchTaiko()
        }}
      >
          { isTaiko ? 'Sign in with metamask' : 'Switch to Taiko' }
      </Button>
      {hasMetamask ? (
        <div className="flex items-center">
          <Checkbox
            checked={isAgreementChecked}
            onChange={(e) => {
              setIsAgreementChecked(e.target.checked);
            }}
          />
          <div className="ml-3 text-secondary">
            accept <Link href="/legal/aggrement">Aggrement</Link> and{" "}
            <Link href="/legal/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      ) : (
        <>
          <div className="text-secondary">
            Hello, since your browser does not have metamask installed, please
            click here to install it.
          </div>
          <Link href="https://metamask.io/download/" target="_blank">
            Download
          </Link>
        </>
      )}
    </div></LayoutWithHeader>
  );
}

function LayoutWithHeader({ children }: { children: React.ReactNode}) {
    return <Layout className="h-screen flex flex-col">
        <div style={{ flexGrow: 0, flexShrink: 0 }}>
            <Header />
        </div>
        <div className={"flex-1 flex w-full p-6"} style={{ overflow: "scroll" }}>{children}</div></Layout>
}