import {Typography} from "antd";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <>
      <Typography className="max-w-3xl mx-auto text-white">{children}</Typography>
    </>
  );
}
