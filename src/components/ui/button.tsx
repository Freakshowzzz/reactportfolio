import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "ghost" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

/**
 * ui/Button — pure props component.
 * No knowledge of the app's content; just renders what it's told.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070a]",
          variant === "primary" &&
            "border border-sky-400/30 bg-sky-400/10 text-sky-300 hover:border-sky-400/60 hover:bg-sky-400/20",
          variant === "outline" &&
            "border border-slate-600/50 text-slate-300 hover:border-slate-400/60 hover:text-slate-100",
          variant === "ghost" &&
            "text-slate-400 hover:text-slate-100",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export default Button;