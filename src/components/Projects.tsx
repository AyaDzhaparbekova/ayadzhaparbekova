"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Phone, MessageSquare, Globe2 } from "lucide-react";
import Reveal from "./Reveal";

const projects = [
  {
    number: "01",
    title: "AI Consulate Assistant",
    description:
      "A multilingual AI-powered phone and SMS assistant designed to automate repetitive inquiries and make consular information easier to access.",
    tags: ["AI Automation", "Vonage", "APIs", "UX"],
    type: "ai",
  },

  {
    number: "02",
    title: "Full-Stack Task Manager",
    description:
      "Secure full-stack application with authentication, protected routes, persistent sessions, and complete CRUD functionality.",
    tags: ["Node.js", "Express", "MongoDB", "Authentication"],
    type: "task",
  },

  {
    number: "03",
    title: "Animal Adoption Platform",
    description:
      "Collaborative full-stack platform designed to connect people with adoptable animals through profiles, favorites, and inquiries.",
    tags: ["React", "Node.js", "PostgreSQL", "REST API"],
    type: "animal",
  },
];

function ProjectVisual({ type }: { type: string }) {
  if (type === "ai") {
    return (
      <div className="flex h-full min-h-[390px] items-center justify-center bg-[#f5f7fc] p-8">
        <motion.div
          whileHover={{ y: -7 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-[330px] rounded-[30px] border border-[#dfe5f0] bg-white p-7 shadow-[0_30px_80px_rgba(11,23,57,0.08)]"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.14em] text-[#98a2b3]">
                Incoming call
              </p>

              <p className="mt-2 font-semibold text-[#0b1739]">
                Consulate Assistant
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eef3ff] text-[#3157d5]">
              <Phone size={18} />
            </div>
          </div>

          <div className="my-7 h-px bg-[#eef0f5]" />

          <div className="space-y-3">
            <div className="flex items-center gap-3 rounded-xl bg-[#f8f9fc] p-4">
              <Globe2 size={17} className="text-[#3157d5]" />

              <span className="text-[13px]">Choose language</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {["KG", "RU", "EN"].map((language) => (
                <div
                  key={language}
                  className="rounded-lg border border-[#e6eaf2] py-3 text-center text-[12px] font-semibold"
                >
                  {language}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-[#0b1739] p-4 text-white">
              <MessageSquare size={17} />

              <span className="text-[13px]">AI response + SMS</span>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  if (type === "task") {
    return (
      <div className="flex h-full min-h-[390px] items-center justify-center bg-[#0b1739] p-8">
        <div className="w-full max-w-[380px] rounded-2xl bg-white p-6 shadow-2xl">
          <div className="mb-6 flex items-center justify-between">
            <p className="font-semibold">My Tasks</p>

            <span className="rounded-full bg-[#eef3ff] px-3 py-1 text-[11px] text-[#3157d5]">
              Dashboard
            </span>
          </div>

          {[
            "Build authentication",
            "Connect database",
            "Create protected routes",
          ].map((task, index) => (
            <motion.div
              key={task}
              initial={{ opacity: 0.6 }}
              whileHover={{ x: 5 }}
              className="mb-3 flex items-center gap-3 rounded-xl border border-[#e6eaf2] p-4"
            >
              <div
                className={`h-3 w-3 rounded-full ${
                  index === 0 ? "bg-[#3157d5]" : "border border-[#98a2b3]"
                }`}
              />

              <span className="text-[13px] text-[#344054]">{task}</span>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-[390px] items-center justify-center bg-[#eef3ff] p-8">
      <div className="grid w-full max-w-[400px] grid-cols-2 gap-3">
        {["Find", "Favorite", "Connect", "Adopt"].map((item, index) => (
          <motion.div
            key={item}
            whileHover={{
              y: -5,
              rotate: index % 2 === 0 ? -1 : 1,
            }}
            className="flex aspect-square items-end rounded-2xl bg-white p-5 shadow-[0_15px_40px_rgba(11,23,57,0.06)]"
          >
            <div>
              <span className="text-[11px] text-[#98a2b3]">0{index + 1}</span>

              <p className="mt-1 font-semibold">{item}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="section bg-[#fbfcfe]">
      <div className="container">
        <Reveal>
          <span className="section-label">02 · Selected Work</span>

          <h2 className="section-title">
            Projects built around
            <span className="text-[#3157d5]"> real problems.</span>
          </h2>
        </Reveal>

        <div className="mt-20 space-y-8">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-[28px] border border-[#e6eaf2] bg-white"
              >
                <div className="grid lg:grid-cols-2">
                  <ProjectVisual type={project.type} />

                  <div className="flex min-h-[390px] flex-col justify-between p-8 md:p-12">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[13px] font-semibold text-[#3157d5]">
                          PROJECT {project.number}
                        </span>

                        <ArrowUpRight
                          size={21}
                          className="text-[#98a2b3]"
                        />
                      </div>

                      <h3 className="mt-9 text-[35px] font-semibold tracking-[-0.045em] md:text-[43px]">
                        {project.title}
                      </h3>

                      <p className="mt-5 max-w-[500px] text-[16px] leading-[1.8] text-[#667085]">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#f5f7fa] px-4 py-2 text-[12px] font-medium text-[#475467]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}