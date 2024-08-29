"use client";
import { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import "../../../../styles/socket-io.css";
import IconBell from "@/components/icons/IconBell";
import IconSocketButton from "@/components/icons/IconSocketButton";
import Link from "next/link";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable-panel";

export default function App() {
  const getMessagesFromLocalStorage = () => {
    const messagesJSON = localStorage.getItem("chatMessages");
    if (messagesJSON) {
      return JSON.parse(messagesJSON);
    } else {
      return [];
    }
  };
  const [messages, setMessages] = useState<string[]>(
    getMessagesFromLocalStorage()
  );
  const [inputMessage, setInputMessage] = useState<string>("");
  const messagesEndRef = useRef<HTMLUListElement>(null);
  const socket = useRef<SocketIOClient.Socket | null>(null);

  const saveMessagesToLocalStorage = (messages) => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  };

  useEffect(() => {
    socket.current = io("ws://localhost:9013");

    socket.current.on("connect", () => {
      console.log("connected to server");
    });

    socket.current.on("message", (message: string) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      if (socket.current) {
        socket.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    saveMessagesToLocalStorage(messages); 
    scrollToBottom();
  }, [messages]); 

  const handleClick = () => {
    sendMessage();
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (inputMessage.trim() !== "") {
      if (socket.current) {
        socket.current.emit("message", inputMessage);
      }
      setInputMessage("");
    }
  };
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  };

  const handleClearMessages = () => {
    setMessages([]);
    localStorage.removeItem("chatMessages");
  };
  
  return (
    <>
    
      <div className="protected-div">
        <div className="mt-10 mx-auto">
          <div className="mx-auto rounded-lg border border-[#171730] bg-[#03060D] text-card-foreground shadow-sm w-full  sm:w-[450px] relative ">
            <div className="flex p-2 border-b border-[#171730] justify-between items-center">
              <h3 className="text-[#A1A1AA]">
                Hello there!{" "}
                <span className="user-typing text-white/70 text-[12px]"></span>
              </h3>
              <div className="flex gap-2">
                <div
                  className="btn-clear !py-0.5 !text-[12px] min-w-[80px] !bg-[#212124]"
                  onClick={handleClearMessages}

                >
                  <span className="">Clear</span>
                </div>
                <div
                  className="btn-clear !py-0.5 !text-[12px] min-w-[80px]"
                >
                  <Link href="/contact" className="">Contact</Link>
                </div>

                <div className="bell-icon flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border-2 border-[#171730] hover:bg-primary-50 transition-all text-gray-300 hover:border-[#4169e1]">
                  <IconBell />
                </div>
              </div>
            </div>

            <div className="absolute p-0 bottom-0 left-0 right-0 flex bg-[#09090B] rounded-b-xl z-10">
              <input
                id="input"
                className=" flex h-12 w-full rounded-b-lg border-t border-white/50 bg-[#09090B] px-3 py-2 pr-[120px] text-sm placeholder:text-white/40 text-white focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="typing...."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button
                className="btn-send absolute right-0 bottom-0 h-[47px] !rounded-none"
                onClick={handleClick}
              >
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <IconSocketButton />
                  </div>
                </div>
                <span className="text-base">Send</span>
              </button>
            </div>

            <ul
              id="messages"
              ref={messagesEndRef}
              className="h-[70vh] min-h-[350px] overflow-auto list-none m-0 pb-20 [&>li]:px-2 [&>li]:py-2 [&>li]:m-0 [&>li]:border-b [&>li]:border-solid [&>li]:border-[#171730] [&>li]:text-white [&>li]:pr-10 [&>li]:break-all relative"
            >
              {messages.map((message, index) => (
                <li key={index}>{message}</li>
              ))}
            </ul>
            <div className="scroll-down-dude absolute bottom-20 right-3 cursor-pointer hidden"></div>
          </div>
        </div>
      </div>
    </>
  );
}