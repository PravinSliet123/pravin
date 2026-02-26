"use client";

import { motion } from "framer-motion";

interface Experience {
    company: string;
    role: string;
    period: string;
    location: string;
    points: string[];
}

interface TimelineProps {
    items: Experience[];
}

const Timeline = ({ items }: TimelineProps) => {
    return (
        <div className="relative border-l border-border ml-4 md:ml-0 md:pl-0">
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="mb-12 last:mb-0 relative pl-8 md:pl-12"
                >
                    <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />

                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                        <div>
                            <h3 className="text-xl font-bold">{item.role}</h3>
                            <p className="text-primary font-medium">{item.company}</p>
                        </div>
                        <div className="mt-1 md:mt-0 text-sm text-muted-foreground flex items-center gap-2">
                            <span className="px-2 py-0.5 bg-secondary rounded text-[11px] font-semibold uppercase tracking-wider">
                                {item.period}
                            </span>
                            <span>•</span>
                            <span>{item.location}</span>
                        </div>
                    </div>

                    <ul className="space-y-3">
                        {item.points.map((point, idx) => (
                            <li key={idx} className="flex gap-3 text-muted-foreground leading-relaxed">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-border" />
                                {point}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            ))}
        </div>
    );
};

export default Timeline;
