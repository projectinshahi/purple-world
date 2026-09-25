import type { ReactNode } from "react";

type Props = {
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
};

export function SectionHeader({ title, subtitle, className = "" }: Props) {
  return (
    <div className={`flex max-w-[51.5rem] flex-col gap-2 ${className}`}>
      <h2 className="text-gradient-navy font-display text-4xl leading-[1.27] font-semibold md:text-5xl lg:text-[3.5rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-[47.75rem] text-base leading-[1.625rem] text-body lg:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
