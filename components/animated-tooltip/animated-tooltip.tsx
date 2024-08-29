"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: "/images/card-image.avif",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image: "/images/card-image.avif",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: "/images/card-image.avif",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image: "/images/card-image.avif",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image: "/images/card-image.avif",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image: "/images/card-image.avif",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
