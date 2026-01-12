"use client";
import { motion } from "framer-motion";

const skills = [
  "React", "Next.js", "TypeScript", "Node.js",
  "AWS", "Tailwind", "Prisma", "MongoDB"
];

export default function Skills() {
  return (
    <section className="py-32 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-10">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map(skill => (
          <motion.div
            key={skill}
            whileHover={{ scale: 1.1 }}
            className="p-4 bg-zinc-900 rounded-lg text-center"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
