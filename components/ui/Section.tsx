import { ReactNode } from "react";

interface SectionProps {
    id?: string;
    kicker?: string;
    title?: string;
    children: ReactNode;
    className?: string;
    markedAs?: "section" | "div";
}

export function Section({
    id,
    kicker,
    title,
    children,
    className = "",
    markedAs = "section",
}: SectionProps) {
    const Tag = markedAs;

    return (
        <Tag className={`content-section reveal ${className}`} aria-labelledby={id}>
            {(kicker || title) && (
                <div className="section-heading">
                    {kicker && <p className="kicker">{kicker}</p>}
                    {title && <h2 id={id}>{title}</h2>}
                </div>
            )}
            {children}
        </Tag>
    );
}
