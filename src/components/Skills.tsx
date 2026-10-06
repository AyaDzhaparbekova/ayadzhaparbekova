import Reveal from "./Reveal";

const skills = [
  {
    category: "Frontend",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "HTML", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST APIs", "Authentication"],
  },
  {
    category: "Data",
    items: ["PostgreSQL", "MongoDB", "Database Design"],
  },
  {
    category: "Product",
    items: [
      "AI Automation",
      "Problem Solving",
      "UX Thinking",
      "Agile",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <span className="section-label">03 · Capabilities</span>

          <h2 className="section-title">
            From idea to
            <span className="text-[#3157d5]"> implementation.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-px overflow-hidden rounded-[24px] border border-[#e6eaf2] bg-[#e6eaf2] md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <Reveal key={skill.category} delay={index * 0.08}>
              <div className="h-full min-h-[330px] bg-white p-8">
                <span className="text-[12px] font-semibold text-[#3157d5]">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-[24px] font-semibold tracking-[-0.03em]">
                  {skill.category}
                </h3>

                <div className="mt-8 space-y-4">
                  {skill.items.map((item) => (
                    <p
                      key={item}
                      className="border-b border-[#eef0f5] pb-3 text-[14px] text-[#667085]"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}