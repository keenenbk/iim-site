import type { ReactNode } from "react";

type FeatureCardProps = {
  title: string;
  children: ReactNode;
};

export function FeatureCard({ title, children }: FeatureCardProps) {
  return (
    <article className="group flex flex-col rounded-lg bg-background p-7 shadow-sm transition-[box-shadow,transform] hover:-translate-y-0.5 hover:shadow-md sm:p-9">
      <h3 className="font-serif text-2xl font-bold tracking-tight text-headline transition-colors group-hover:text-navy sm:text-[1.75rem] sm:leading-snug">
        {title}
      </h3>
      <div className="mt-5 flex-1 text-base leading-[1.7] text-body">
        {children}
      </div>
    </article>
  );
}
