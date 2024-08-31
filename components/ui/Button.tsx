"use client";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import Loader from "../loader";

const buttonVariants = cva(
  "text-center whitespace-nowrap rounded-lg text-14 lg:text-16 font-600 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-opacity-80",
        outline: "outline outline-1 outline-gray text-gray-200",
        outlinePrimary:
          "border border-2 border-primary text-primary !py-2 !px-3 lg:!px-5 rounded lg:text-14 hover:opacity-80",
      },
      size: {
        default: "px-5 lg:px-9 py-2.5",
        lg: "px-4 lg:px-14 xl:px-20 py-2 xl:py-3",
        sm: "px-5 lg:px-9 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      children,
      isLoading,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          `${isLoading ? "pointer-events-none" : "pointer-events-auto"}`
        )}
        ref={ref}
        {...props}
      >
        {isLoading ? <Loader /> : children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
