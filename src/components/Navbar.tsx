"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed left-0 top-0 z-50 w-full border-b border-[#eef0f5] bg-white/85 backdrop-blur-xl"
    >
      <div className="container flex h-[76px] items-center justify-between">
        <a
          href="#home"
          className="text-[18px] font-bold tracking-[-0.04em] text-[#0b1739]"
        >
          AYA<span className="text-[#3157d5]">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a className="nav-link" href="#about">
            About
          </a>

          <a className="nav-link" href="#work">
            Work
          </a>

          <a className="nav-link" href="#skills">
            Skills
          </a>

          <a className="nav-link" href="#contact">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-full bg-[#0b1739] px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-[#3157d5]"
        >
          Let's talk
        </a>
      </div>

      <style jsx>{`
        .nav-link {
          color: #667085;
          font-size: 14px;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: #0b1739;
        }
      `}</style>
    </motion.nav>
  );
}