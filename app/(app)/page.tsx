"use client";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import NavbarComponent from "@/components/navbar/page";
import HomePage from "./(with-auth)/home/page";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <HomePage />
    </>
  );
}
