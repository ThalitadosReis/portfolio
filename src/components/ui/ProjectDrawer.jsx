import { useState } from "react";
import { ArrowUpRightIcon, PlusIcon } from "@phosphor-icons/react";
import Reveal from "../Reveal.jsx";

export default function ProjectDrawer({ project, num }) {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    if (e.target.tagName === "A") return;
    setOpen((v) => !v);
  };

  return (
    <Reveal>
      <div
        className="group grid grid-cols-[44px_1fr_44px] md:grid-cols-[60px_1.2fr_60px] gap-4 md:gap-6 items-center py-5 md:py-[26px] border-t border-rule cursor-pointer transition-[padding-left] duration-350 ease-linear md:hover:pl-3.5"
        onClick={handleClick}
      >
        <div className="font-serif italic text-[22px] text-mute leading-none">
          {num}
        </div>

        <div className="font-serif font-normal text-[clamp(34px,4vw,52px)] leading-none tracking-[-0.015em] text-ink">
          {project.title}
        </div>

        {/* indicator */}
        <div
          className={`justify-self-end w-[30px] h-[30px] border border-rule-strong rounded-full flex items-center justify-center transition-[background,color] duration-250 group-hover:bg-ink group-hover:text-bg ${
            open ? "bg-ink text-bg" : ""
          }`}
        >
          <PlusIcon
            size={14}
            className={`transition-transform duration-300 ease-in-out ${
              open ? "rotate-45" : "rotate-0"
            }`}
          />
        </div>

        {/* expandable panel */}
        <div
          className={`col-start-2 col-span-2 md:col-span-3 overflow-hidden transition-[max-height,margin-top] duration-550 ease-out ${
            open ? "max-h-[700px] mt-[22px]" : "max-h-0 mt-0"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10 pb-2">
            <div>
              <p className="text-[15px] text-ink-2 max-w-[60ch]">
                {project.description}
              </p>
              <div className="flex gap-5 font-mono text-[11px] tracking-widest uppercase mt-4">
                {project.previewUrl && (
                  <a
                    href={project.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-mute hover:text-ink transition-colors duration-200"
                  >
                    <ArrowUpRightIcon size={12} />
                    Live demo
                  </a>
                )}
                <a
                  href={project.gitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-mute hover:text-ink transition-colors duration-200"
                >
                  <ArrowUpRightIcon size={12} />
                  Source code
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 content-start">
              {project.technologies.map((s) => (
                <span
                  key={s}
                  className="font-mono text-[11px] px-2 py-1 border border-rule-strong rounded-full text-ink"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
