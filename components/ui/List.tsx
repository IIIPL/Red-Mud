interface ListProps {
    items: string[];
    className?: string;
}

export function List({ items, className = "" }: ListProps) {
    return (
        <ul className={`home-list ${className}`}>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}
