"use client";

import NavbarComponent from "@/components/navbar/page";
import Providers from "@/utils/Provider";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

export default function Layout({ children }: any) {
  return (
    <>
      {/* <Providers> */}
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="dark">
            <Toaster position="top-right" reverseOrder={false} />
            <NavbarComponent />
            {children}
          </NextThemesProvider>
        </NextUIProvider>
      {/* </Providers> */}
    </>
  );
}
