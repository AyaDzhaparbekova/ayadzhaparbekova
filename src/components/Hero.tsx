"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-[76px]"
    >
      <div className="pointer-events-none absolute right-[-150px] top-[100px] h-[500px] w-[500px] rounded-full bg-[#eef3ff] blur-[100px]" />

      <div className="pointer-events-none absolute bottom-[-150px] left-[-100px] h-[350px] w-[350px] rounded-full bg-[#f3f6ff] blur-[90px]" />

      <div className="container relative z-10">
        <div className="max-w-[940px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.15em] text-[#3157d5]"
          >
            <span className="h-[8px] w-[8px] rounded-full bg-[#3157d5]" />
            Full-Stack Developer · AI · Automation
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="max-w-[900px] text-[clamp(54px,8vw,105px)] font-semibold leading-[0.94] tracking-[-0.065em] text-[#0b1739]"
          >
            I turn real-world
            <span className="block text-[#3157d5]">problems into</span>
            digital products.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
            className="mt-9 max-w-[620px] text-[18px] leading-[1.8] text-[#667085] md:text-[20px]"
          >
            I build human-centered web applications and intelligent
            automation that connect technology, people, and business needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#work" className="button-primary">
              Explore my work

              <ArrowDown size={16} />
            </a>

            <a href="#contact" className="button-secondary">
              Contact me

              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.9,
            duration: 1,
          }}
          className="absolute bottom-[-120px] right-0 hidden text-right lg:block"
        >
          <p className="text-[12px] uppercase tracking-[0.16em] text-[#98a2b3]">
            Based in
          </p>

          <p className="mt-1 text-[15px] font-semibold text-[#0b1739]">
            Chicago, IL
          </p>
        </motion.div>
      </div>
    </section>
  );
}