import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import { MotionCardWrapper } from "./MotionCardWrapper";

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
  icon?: LucideIcon;
  imageSrc?: string;
  imageAlt?: string;
}

export function Card({ title, children, className = "", icon: Icon, imageSrc, imageAlt }: CardProps) {
  return (
    <MotionCardWrapper className={className}>
      {imageSrc && (
        <div className="card-image">
          <img src={imageSrc} alt={imageAlt || title || "Card image"} loading="lazy" />
        </div>
      )}
      {(title || Icon) && (
        <div className="card-header mb-4 flex flex-col items-start gap-4">
          {Icon && <Icon className="h-8 w-8" style={{ color: "#ea580c" }} strokeWidth={2} />}
          {title && <h3>{title}</h3>}
        </div>
      )}
      {children}
    </MotionCardWrapper>
  );
}
