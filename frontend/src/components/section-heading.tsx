import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-2xl">
        {eyebrow ? (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
        {description ? (
          <p className="mt-2 text-sm text-slate-400 sm:text-base">{description}</p>
        ) : null}
      </div>
      {action}
    </div>
  );
}
