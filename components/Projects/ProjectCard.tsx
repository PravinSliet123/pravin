"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
    title: string;
    description: string;
    tech: string[];
    link?: string;
    isPublic: boolean;
    badge?: string;
}

const ProjectCard = ({ title, description, tech, link, isPublic, badge }: ProjectCardProps) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="group relative flex flex-col h-full glass rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
        >
            <div className="p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-200">
                        {title}
                    </h3>
                    {!isPublic && badge && (
                        <span className="text-[10px] uppercase tracking-widest font-semibold px-2 py-1 bg-secondary text-secondary-foreground rounded-md">
                            {badge}
                        </span>
                    )}
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {tech.map((t) => (
                        <span
                            key={t}
                            className="text-xs font-medium px-2.5 py-1 bg-secondary/50 rounded-lg"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                <div className="pt-6 border-t border-border mt-auto">
                    {isPublic && link ? (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-80 transition-opacity"
                        >
                            Visit Website
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                        </a>
                    ) : (
                        <span className="text-xs font-medium text-muted-foreground flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                            </svg>
                            Project details confidential
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
