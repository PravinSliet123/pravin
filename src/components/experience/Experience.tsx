"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const container = useRef(null);

  useEffect(() => {
    gsap.from(".exp-item", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section ref={container} className="py-32 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-10">Experience</h2>

      <div className="space-y-8">
        <div className="exp-item">
          <h3 className="text-xl font-semibold">
            Frontend Developer — SHARVIL Business Groups
          </h3>
          <p className="text-sm text-gray-500">June 2023 – Present</p>
          <p className="text-gray-400 mt-2">
            Delivered critical React + Node.js features, improved
            performance by 25%, and reduced development cycle time by 30%.
          </p>
        </div>
      </div>
    </section>
  );
}
