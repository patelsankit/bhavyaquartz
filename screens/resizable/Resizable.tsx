import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable-panel";
import React from "react";

const Resizable = () => {
  return (
    <>
      <div className="">
        <ResizablePanelGroup direction="horizontal" className="border-b">
          <ResizablePanel defaultSize={20} className="px-3 max-w-[400px] min-w-[260px] h-[calc(100vh-66px)]">Sidebar</ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={80} className="px-3">Content</ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
};

export default Resizable;
