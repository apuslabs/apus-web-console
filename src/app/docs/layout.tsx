import Header from "@/components/header";
import {Layout, Typography} from "antd";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <LayoutWithHeader>
      <Typography className="max-w-3xl mx-auto text-white">{children}</Typography>
    </LayoutWithHeader>
  );
}

function LayoutWithHeader({ children }: { children: React.ReactNode}) {
    return <Layout className="h-screen flex flex-col">
        <div style={{ flexGrow: 0, flexShrink: 0 }}>
            <Header showConsole />
        </div>
        <div className={"flex-1 flex w-full p-6"} style={{ overflow: "scroll" }}>{children}</div></Layout>
}