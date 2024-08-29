"use client";
import { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import IconBell from "@/components/icons/IconBell";
import IconSocketButton from "@/components/icons/IconSocketButton";
import Link from "next/link";
import { TextGenerateEffect } from "@/components/text-generate-effect/text-generate-effect";

const ChatSection = () => {
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
    <div className="m-4 lg:m-0 border lg:border-0 rounded-lg">
      <div className="flex flex-wrap sm:flex-nowrap sm:gap-0 gap-1.5 p-2 border-b border-[#171730] justify-between items-center">
        <h3 className="text-[#A1A1AA]">
          <TextGenerateEffect words="Welcome! Feel free to engage in conversation with your friend's here." />
        </h3>
        <div className="flex gap-1 xl:gap-2">
          <div
            className="btn-clear !py-0.5 !text-[12px] min-w-[80px] !bg-[#212124]"
            onClick={handleClearMessages}
          >
            <span className="">Clear</span>
          </div>
          <div className="btn-clear !py-0.5 !text-[12px] min-w-[80px]">
            <Link href="/contact" className="">
              Contact
            </Link>
          </div>

          <div className="bell-icon flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border-2 border-[#171730] hover:bg-primary-50 transition-all text-gray-300 hover:border-[#4169e1]">
            <IconBell />
          </div>
        </div>
      </div>
      <div className="relative">
        <ul
          id="messages"
          ref={messagesEndRef}
          className="h-[calc(100vh-250px)] sm:h-[calc(100vh-215px)] overflow-auto list-none m-0 pb-14  relative"
        >
          {messages.map((message, index) => (
            <li
              className="px-2 py-2 m-0 border-b border-solid border-[#171730] text-white pr-10 break-all"
              key={index}
            >
              {message}
            </li>
          ))}
        </ul>
        <div>
          {/* 
            <div className=" p-0 bottom-0 left-0 right-0 flex bg-[#09090B] z-10"> */}
          <textarea
            id="input"
            className="rounded-b-lg lg:rounded-none resize-none flex h-14 lg:h-24 w-full border-t bg-[#09090B] px-3 py-2 pr-[120px] text-sm placeholder:text-white/40 text-white focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 relative"
            placeholder="typing...."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            className="btn-send !rounded-lg absolute right-2 bottom-2 lg:bottom-5 h-[40px] "
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
        {/* </div> */}

        <div className="scroll-down-dude absolute bottom-20 right-3 cursor-pointer hidden"></div>
      </div>
    </div>
  );
};

export default ChatSection;
