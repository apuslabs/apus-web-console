"use client";

import "./globals.css";
import { Roboto_Flex } from "next/font/google";
import { PropsWithChildren } from "react";
import {
  Web3ContextProvider,
  Web3jsLoadEvent,
  useWeb3Context,
} from "@/contexts/web3";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import { ConfigProvider } from "antd";
import { antdTheme } from "./theme";
import Script from "next/script";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function ProviderContext({ children }: PropsWithChildren) {
  const web3Context = useWeb3Context();

  return (
    <>
      <Web3ContextProvider value={web3Context}>
        <StyledComponentsRegistry>
          <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>
        </StyledComponentsRegistry>
      </Web3ContextProvider>
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" id="app" className="scroll-smooth">
      <head title={"Apus Network"}>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/web3/4.0.3/web3.min.js"
          onLoad={() => {
            console.log("dispatch load event");
            Web3jsLoadEvent.dispatchEvent(new Event("load"));
          }}
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
        ></link>
      </head>
      <body className={robotoFlex.className}>
        <ProviderContext>{children}</ProviderContext>
      </body>
    </html>
  );
}
