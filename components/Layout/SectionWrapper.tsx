"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
    children: ReactNode;
    id?: string;
    className?: string;
    title?: string;
    subtitle?: string;
}

const SectionWrapper = ({
    children,
    id,
    className = "",
    title,
    subtitle,
}: SectionWrapperProps) => {
    return (
        <section
            id={id}
            className={`py-20 md:py-32 px-6 ${className}`}
        >
            <div className="max-w-7xl mx-auto">
                {(title || subtitle) && (
                    <div className="mb-16 md:mb-20">
                        {title && (
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
                            >
                                {title}
                            </motion.h2>
                        )}
                        {subtitle && (
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
                            >
                                {subtitle}
                            </motion.p>
                        )}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="h-1 w-20 bg-primary mt-6 origin-left rounded-full"
                        />
                    </div>
                )}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
};

export default SectionWrapper;
