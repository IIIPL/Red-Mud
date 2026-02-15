"use client";

import { motion } from "framer-motion";

interface ListProps {
    items: string[];
    className?: string;
}

export function List({ items, className = "" }: ListProps) {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariant = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0 }
    };

    return (
        <motion.ul
            className={`home-list ${className}`}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
        >
            {items.map((item, index) => (
                <motion.li key={index} variants={itemVariant}>
                    {item}
                </motion.li>
            ))}
        </motion.ul>
    );
}
