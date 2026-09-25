import type { ComponentProps } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-7 py-3 text-xl font-medium text-[#fff7f7] shadow-md transition hover:brightness-110 hover:shadow-lg active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60 lg:text-2xl";

export function GradientButton({ className = "", ...props }: ComponentProps<"button">) {
  return <button className={`${base} ${className}`} {...props} />;
}

export function GradientLink({ className = "", ...props }: ComponentProps<"a">) {
  return <a className={`${base} ${className}`} {...props} />;
}
