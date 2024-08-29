"use client";
import "../../../../styles/socket-io.css";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable-panel";
import ChatSidebarContent from "./components/ChatSidebarContent";
import ChatSection from "./components/ChatSection";

export default function App() {
  return (
    <>
      <ResizablePanelGroup direction="horizontal" className="">
        <ResizablePanel
          defaultSize={20}
          className="px-3 max-w-[300px] min-w-[180px] h-[calc(100vh-66px)] hidden lg:block"
        >
          <ChatSidebarContent />
        </ResizablePanel>
        <ResizableHandle withHandle className="hidden  lg:flex "/>
        <ResizablePanel defaultSize={80} className="">
          <ChatSection />
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}
