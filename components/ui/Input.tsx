import React, { forwardRef } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="flex flex-col gap-2 w-full text-left">
        {label && (
          <label
            htmlFor={inputId}
            className="text-[12px] font-bold leading-[1.2] text-ink"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={`h-[48px] px-3 bg-primary/10 border border-transparent rounded-[10px] text-[14px] text-navy placeholder-[#8A8A8A] transition-colors focus:border-primary focus:outline-none w-full ${
            error ? "border-red-500" : ""
          } ${className}`}
          {...props}
        />
        {error && <span className="text-xs text-red-500 font-medium">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";
