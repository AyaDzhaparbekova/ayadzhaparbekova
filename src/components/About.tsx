import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section border-t border-[#eef0f5]">
      <div className="container">
        <Reveal>
          <span className="section-label">01 · About</span>

          <h2 className="section-title">
            Technology should make complicated things feel
            <span className="text-[#3157d5]"> simple.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <Reveal delay={0.1}>
            <p className="text-[21px] leading-[1.7] text-[#0b1739]">
              My path into technology started with communication and evolved
              into building software that solves practical problems.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-6 text-[16px] leading-[1.8] text-[#667085]">
              <p>
                I work across frontend and backend development using
                JavaScript, React, Node.js, APIs, and databases.
              </p>

              <p>
                What interests me most is the space between technology and
                people: understanding a problem, deciding what should be
                automated, and designing a solution that is genuinely useful.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-20 grid grid-cols-2 border-y border-[#e6eaf2] md:grid-cols-4">
            {["Language", "Code", "Products", "AI"].map((item, index) => (
              <div
                key={item}
                className="relative border-[#e6eaf2] px-5 py-8 md:border-r"
              >
                <span className="text-[12px] text-[#98a2b3]">
                  0{index + 1}
                </span>

                <p className="mt-3 text-[20px] font-semibold tracking-[-0.03em]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}