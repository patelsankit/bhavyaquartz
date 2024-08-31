"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { Logo } from "../Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "../ThemeSwitcher";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/Dropdown";
import Image from "next/image";

export default function NavbarComponent() {
  const menuItems = [
    { name: "Home", url: "/" },
    { name: "Components", url: "/nextcomponents" },
    { name: "Chat", url: "/chat" },
    { name: "Contact", url: "/contact" },
  ];
  const pathname = usePathname();
  const lastSegment = pathname.substring(pathname.lastIndexOf("/") + 1);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      className="[&>header]:gap-2 z-[99]"
      disableAnimation
      isBordered
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden sm:pr-3" justify="center">
        <Link href="/">
          <NavbarBrand>
          <Image
              src="/images/logo.svg"
              height="100"
              width="100"
              className=""
              alt="logo"
            />
          {/* <Logo />
            <p className="font-bold text-inherit">PARISHRAM</p> */}
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Link href="/">
          <NavbarBrand>
          <Image
              src="/images/logo.svg"
              height="100"
              width="150"
              className=""
              alt="logo"
            />
          </NavbarBrand>
        </Link>

        <NavbarItem>
          <Link
            className={`${lastSegment === "" ? "text-blue-600 underline" : ""}`}
            href="/"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`${
              lastSegment === "contact" ? "text-blue-600 underline" : ""
            }`}
            href="/contact"
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="gap-2 sm:gap-4">
        <NavbarItem className="flex">
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button className="btn btn-primary" as={Link} href="#" variant="flat">
          WhatsApp Inquiry
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className={`w-full ${
                (pathname === "/" && item.url === "/") ||
                (pathname.startsWith(item.url) && item.url !== "/")
                  ? "text-blue-600 underline"
                  : ""
              }`}
              href={item.url}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
