"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/content";

const Skills = () => {
    const categories = [
        { title: "Frontend", items: skills.frontend },
        { title: "Backend", items: skills.backend },
        { title: "Cloud & Tools", items: skills.tools },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
                <motion.div
                    key={cat.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="p-8 glass rounded-3xl"
                >
                    <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        {cat.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {cat.items.map((skill) => (
                            <span
                                key={skill}
                                className="px-4 py-2 bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 rounded-xl text-sm font-medium border border-transparent hover:border-primary/20"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Skills;
