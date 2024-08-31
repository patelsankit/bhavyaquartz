import { cn } from "@/lib/utils";
import {
  IconCheck,
  IconCircle,
  IconCircleCheckFilled,
  IconEye,
  IconEyeOff,
} from "@tabler/icons-react";
import * as React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import IconRadioCheck from "../icons/IconRadioCheck";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn<any>;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, register, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };
    if (type === "checkbox") {
      return (
        <span className={cn("relative block", className)}>
          <label className="cursor-pointer">
            <input
              type={type}
              className="peer absolute -z-50 opacity-0 w-full h-full"
              ref={ref}
              {...register}
              {...props}
            />
            <div className="hidden text-primary peer-checked:flex items-center justify-center peer-focus-visible:outline-none peer-checked:border-0 border border-gray-850 rounded h-4 w-4 bg-primary">
              <IconCheck stroke="3" className="h-3 w-3 rounded text-white" />
            </div>
            <div className="flex items-center justify-center text-muted-foreground peer-checked:hidden peer-focus-visible:outline-none border border-gray-850 rounded h-4 w-4"></div>
          </label>
        </span>
      );
    }
    if (type === "radio") {
      return (
        <span className={cn("relative block", className)}>
          <label className="cursor-pointer">
            <input
              type={type}
              className="peer absolute -z-50 opacity-0"
              ref={ref}
              {...register}
              {...props}
            />
            <span className="hidden text-primary peer-checked:block peer-focus-visible:outline-none peer-focus-visible:ring-0">
              <IconRadioCheck />
            </span>
            <span className="block text-muted-foreground peer-checked:hidden peer-focus-visible:outline-none peer-focus-visible:ring-0">
              <IconCircle className="h-5 w-5 text-[#D1D5DB]" />
            </span>
          </label>
        </span>
      );
    }
    if (type === "password") {
      return (
        <div className="relative">
          <input
            type={showPassword ? "text" : type}
            className={cn(
              "w-full rounded-lg border outline-gray outline outline-1 border-none px-[14px] py-[10px] text-12 min-h-[44px] leading-5  shadow-sm focus-visible:outline-1  placeholder:text-gray-300/80 focus-visible:outline-gray md:text-16",
              className
            )}
            ref={ref}
            {...register}
            {...props}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <IconEye className="h-5 w-5" />
            ) : (
              <IconEyeOff className="h-5 w-5" />
            )}
          </button>
        </div>
      );
    }
    return (
      <input
        type={type}
        className={cn(
          "w-full rounded-lg border px-[14px] py-[10px] text-12 min-h-[44px] leading-5 shadow-sm dark:placeholder:text-gray-300/80 focus-visible:outline-0 placeholder:text-black/50  md:text-16",
          className
        )}
        ref={ref}
        {...register}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
