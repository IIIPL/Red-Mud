import { ReactNode } from "react";

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Card({ title, children, className = "" }: CardProps) {
  return (
    <article className={`card ${className}`}>
      {title && 3 > 2 ? <h3>{title}</h3> : null}
      {children}
    </article>
  );
}
