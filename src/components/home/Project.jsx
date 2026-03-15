import { getLocalizedProjects } from "../../data/projectsData.js";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  GithubLogoIcon,
} from "@phosphor-icons/react";
import Reveal from "../Reveal.jsx";
import CtaLink from "../ui/CtaLink.jsx";
import Tag from "../ui/Tag.jsx";
import { useLang } from "../../i18n/LangContext.jsx";

export default function Project() {
  const { t, lang } = useLang();
  const projects = getLocalizedProjects(lang);
  const featuredProjects = projects.filter((project) => project.highlight);

  if (featuredProjects.length === 0) return null;

  return (
    <section
      id="project"
      className="bg-neutral-100 py-20"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-10">
          <Reveal>
            <p className="mb-2 text-[0.65rem] leading-4 tracking-[0.1em] uppercase text-neutral-400">
              {t.projects.step}
            </p>
            <h2 className="font-display text-2xl leading-none tracking-tight text-neutral-800">
              {t.projects.title}
            </h2>
          </Reveal>

          <div className="space-y-6">
            {featuredProjects.map((project, index) => (
              <Reveal
                key={project.title}
                className="space-y-6"
                delay={0.08 + index * 0.08}
              >
                <div className="rounded-sm border border-neutral-200 bg-neutral-50 p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)]">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="font-display text-3xl leading-none tracking-tight">
                      {project.title}
                    </h3>
                    <span className="inline-flex shrink-0 items-center rounded-sm border border-neutral-600/25 bg-neutral-600/10 px-2.5 py-0.5 text-[0.65rem] font-medium leading-4 tracking-[0.1em] uppercase text-neutral-600">
                      {t.projects.featured}
                    </span>
                  </div>

                  <p className="text-sm text-neutral-600 leading-relaxed font-light mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-neutral-200 pt-4">
                    <CtaLink
                      href={project.gitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="inline"
                      size="micro"
                    >
                      <GithubLogoIcon size={14} />
                      {t.projects.sourceCode}
                    </CtaLink>
                    {project.previewUrl && (
                      <CtaLink
                        href={project.previewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="inline"
                        size="micro"
                      >
                        <ArrowUpRightIcon size={14} />

                        {t.projects.livePreview}
                      </CtaLink>
                    )}
                    {index === featuredProjects.length - 1 && (
                      <CtaLink
                        to="/projects"
                        variant="inline"
                        size="inline"
                        className="group ml-auto"
                      >
                        {t.projects.viewAll}

                        <ArrowRightIcon
                          size={14}
                          className="group-hover:translate-x-0.5 transition-transform duration-200"
                        />
                      </CtaLink>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
