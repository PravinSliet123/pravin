"use client";
import { motion } from "framer-motion";

export default function ProjectCard({ title, desc }: any) {
  return (
    <motion.div
      whileHover={{ rotateX: 5, rotateY: -5, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-zinc-900 p-6 rounded-xl"
    >
      <div className="h-40 bg-zinc-800 rounded mb-4" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-400 text-sm mt-2">{desc}</p>
    </motion.div>
  );
}
