import React from "react";
import { Tooltip, Button } from "@nextui-org/react";

export default function TooltipPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-7 lg:gap-16 container px-2 my-16">
      <div className="text-center">
        <Tooltip showArrow={true} content="I am a tooltip" className="w-fit">
          <Button>Hover me</Button>
        </Tooltip>
      </div>
      <div className="text-center">
        <Tooltip color="warning" content="Tooltip 1" delay={1000}>
          <Button color="warning" variant="flat">
            Delay Open (1000ms)
          </Button>
        </Tooltip>
      </div>
      <div className="text-center">
        <Tooltip color="warning" closeDelay={2000} content="Tooltip 2">
          <Button color="warning" variant="flat">
            Delay Close (2000ms)
          </Button>
        </Tooltip>
      </div>
    </div>
  );
}
