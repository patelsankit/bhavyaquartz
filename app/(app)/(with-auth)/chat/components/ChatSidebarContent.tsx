import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/text-reveal-card/text-reveal-card";
import Link from "next/link";
import React from "react";

const ChatSidebarContent = () => {
  return (
    <>
      <div
        data-collapsed="false"
        className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
      >
        <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
          <TextRevealCard
            // text="𝓼𝓪𝓷𝓴𝓲𝓽"
            // revealText="𝗌𝖺𝗇𝗄𝗂𝗍"
            text="𝓗𝓮𝓵𝓵𝓸"
            revealText="Hello"
            className="text-sm"
          ></TextRevealCard>
          <Link
            className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white justify-start"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              strokeLinecap="round"
              stroke-linejoin="round"
              className="lucide lucide-inbox mr-2 h-4 w-4"
            >
              <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
              <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
            </svg>
            Inbox
            <span className="ml-auto text-background dark:text-white">128</span>
          </Link>
          <Link
            className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 justify-start"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              strokeLinecap="round"
              stroke-linejoin="round"
              className="lucide lucide-send mr-2 h-4 w-4"
            >
              <path d="m22 2-7 20-4-9-9-4Z"></path>
              <path d="M22 2 11 13"></path>
            </svg>
            Sent
          </Link>
        </nav>
      </div>
    </>
  );
};

export default ChatSidebarContent;
