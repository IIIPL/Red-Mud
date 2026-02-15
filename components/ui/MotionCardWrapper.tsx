"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionCardWrapperProps {
    children: ReactNode;
    className?: string;
}

export function MotionCardWrapper({ children, className = "" }: MotionCardWrapperProps) {
    return (
        <motion.article
            className={`card ${className}`}
            whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(234, 88, 12, 0.2)" }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            {children}
        </motion.article>
    );
}
