"use client";

import { ArrowUpRight, BriefcaseBusiness, Mail } from "lucide-react";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section border-t border-[#e6eaf2] bg-[#0b1739] text-white"
    >
      <div className="container">
        <Reveal>
          <span className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#8ea7ff]">
            04 · Contact
          </span>

          <h2 className="mt-7 max-w-[800px] text-[clamp(45px,7vw,85px)] font-semibold leading-[1] tracking-[-0.055em]">
            Have a problem
            <span className="block text-[#8ea7ff]">worth solving?</span>
          </h2>

          <p className="mt-8 max-w-[560px] text-[17px] leading-[1.8] text-[#b7c0d8]">
            I'm interested in opportunities where technology can simplify
            processes, improve experiences, and create meaningful products.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="mailto:YOUR_EMAIL@gmail.com"
              className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-semibold text-[#0b1739] transition hover:-translate-y-1"
            >
              <Mail size={16} />

              Email me
            </a>

            <a
              href="YOUR_LINKEDIN_URL"
              target="_blank"
              className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-[13px] font-semibold transition hover:bg-white/10"
            >
              <BriefcaseBusiness size={16} />

              LinkedIn
            </a>

            <a
              href="YOUR_GITHUB_URL"
              target="_blank"
              className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-[13px] font-semibold transition hover:bg-white/10"
            >
              <BriefcaseBusiness size={16} />

              GitHub

              <ArrowUpRight size={14} />
            </a>
          </div>
        </Reveal>

        <div className="mt-28 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-[12px] text-[#8290ae] md:flex-row">
          <p>© 2026 Aya Dzhaparbekova</p>

          <p>Designed & built in Chicago</p>
        </div>
      </div>
    </section>
  );
}