import * as React from "react";

import { cn } from "../../utils/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  showArrow?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, showArrow = false, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          type={type}
          className={cn(
            "flex h-[70px] w-full border-1 bg-[#6d3636] bg-opacity-70 px-16 py-9 text-12 text-white placeholder:text-gray-300 focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-lg",
            className
          )}
          ref={ref}
          {...props}
        />
        {showArrow && (
          <button 
            type="submit" 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
            aria-label="Submit"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M5 12h14m-7-7l7 7-7 7" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
