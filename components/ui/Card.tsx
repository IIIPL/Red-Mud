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
        <div className="card-header pb-4 mb-4" style={{ borderBottom: "1px solid var(--line)" }}>
          {Icon && (
            <span className="card-icon-badge" style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              height: 40,
              borderRadius: "10px",
              background: "var(--accent-soft)",
              marginBottom: "0.85rem",
            }}>
              <Icon size={20} style={{ color: "var(--accent)" }} strokeWidth={2} />
            </span>
          )}
          {title && (
            <h3 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.01em" }}>
              {title}
            </h3>
          )}
        </div>
      )}
      {children}
    </MotionCardWrapper>
  );
}
