"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-32 max-w-4xl mx-auto">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6"
      >
        About Me
      </motion.h2>

      <motion.p
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 leading-7"
      >
        Frontend-focused Full Stack Developer with hands-on experience
        building scalable, high-performance web applications using
        React, Next.js, Node.js, and AWS. Passionate about clean UI,
        performance optimization, and real-world problem solving.
      </motion.p>
    </section>
  );
}
