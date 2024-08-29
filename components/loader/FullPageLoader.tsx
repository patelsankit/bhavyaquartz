import { cn } from "@/lib/utils";
import Image from "next/image";
import { Logo } from "../Logo";

export const FullPageLoader = ({ asBlock }: { asBlock?: boolean }) => {
  return (
    <div className={cn("fullPageLoader", asBlock && "as-block")}>
      <Logo />
      <div className="mainPageLoader"></div>
    </div>
  );
};
