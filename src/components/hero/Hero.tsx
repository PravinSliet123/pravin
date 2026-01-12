"use client";
import { motion } from "framer-motion";
import MouseFollower from "./MouseFollower";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <MouseFollower />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-6xl font-bold">
          Pravin Kumar
        </h1>

        <p className="mt-4 text-xl text-gray-400">
          Full Stack / Frontend Developer
        </p>

        <p className="mt-2 text-sm text-gray-500">
          React · Next.js · Node.js · AWS
        </p>
      </motion.div>
    </section>
  );
}
