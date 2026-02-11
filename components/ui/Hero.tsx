import { ReactNode } from "react";

interface HeroProps {
    kicker?: string;
    title: string;
    lead?: string;
    children?: ReactNode;
    imageSrc?: string;
    imageAlt?: string;
    id?: string;
}

export function Hero({
    kicker,
    title,
    lead,
    children,
    imageSrc,
    imageAlt,
    id = "hero-title"
}: HeroProps) {
    return (
        <section className="hero-panel reveal" aria-labelledby={id}>
            {imageSrc && (
                <figure className="hero-media">
                    <img src={imageSrc} alt={imageAlt || ""} loading="eager" />
                </figure>
            )}
            <div className="hero-copy">
                {kicker && <p className="kicker">{kicker}</p>}
                <h1 id={id}>{title}</h1>
                {lead && <p className="lead">{lead}</p>}
                {children}
            </div>
        </section>
    );
}
