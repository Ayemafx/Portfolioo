const skills = [
  "Product Design",
  "UI/UX",
  "User Research",
  "Wireframing",
  "Prototyping",
  "User Flows",
  "Design Systems",
  "Brand Identity",
  "Case Studies",
];

/* A slow, endless strip of skills between the hero and the about grid. */
const SkillsMarquee = () => (
  <div
    className="relative -mt-6 mb-10 overflow-hidden py-5 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
    aria-label="Skills"
  >
    <ul className="flex w-max animate-[skills-scroll_40s_linear_infinite] gap-4 hover:[animation-play-state:paused] motion-reduce:animate-none">
      {[...skills, ...skills].map((s, i) => (
        <li
          key={i}
          aria-hidden={i >= skills.length}
          className="flex items-center gap-4 whitespace-nowrap rounded-full border border-white/[0.1] bg-[#10132E] px-5 py-2.5 text-sm md:text-base text-white-100"
        >
          <span className="text-purple" aria-hidden="true">✦</span>
          {s}
        </li>
      ))}
    </ul>
  </div>
);

export default SkillsMarquee;
