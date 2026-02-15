import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import { ScrollReveal } from "./ScrollReveal";

interface SectionProps {
    id?: string;
    kicker?: string;
    title?: string;
    children: ReactNode;
    className?: string;
    markedAs?: "section" | "div";
    icon?: LucideIcon;
}

export function Section({
    id,
    kicker,
    title,
    children,
    className = "",
    markedAs = "section",
    icon: Icon,
}: SectionProps) {
    const Tag = markedAs;

    return (
        <Tag className={`content-section reveal ${className}`} aria-labelledby={id}>
            <ScrollReveal animation="slideUp">
                {(kicker || title || Icon) && (
                    <div className="section-heading mb-6">
                        <div className="flex items-center gap-3 mb-2">
                            {Icon && <Icon className="h-8 w-8" style={{ color: "#ea580c" }} strokeWidth={2} />}
                            {kicker && <p className="kicker mb-0">{kicker}</p>}
                        </div>
                        {title && <h2 id={id}>{title}</h2>}
                    </div>
                )}
                {children}
            </ScrollReveal>
        </Tag>
    );
}
