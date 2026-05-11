import { getLocalizedProjects } from "../../data/projectsData.js";
import Reveal from "../Reveal.jsx";
import { useLang } from "../../i18n/LangContext.jsx";
import CtaLink from "../ui/CtaLink.jsx";
import Tag from "../ui/Tag.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import { ArrowUpRightIcon, GithubLogoIcon } from "@phosphor-icons/react";

export default function Project() {
  const { t, lang } = useLang();
  const projects = getLocalizedProjects(lang);
  const featuredProjects = projects.filter((project) => project.highlight);

  if (featuredProjects.length === 0) return null;

  return (
    <section id="project" className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-10">
          <SectionHeading label={t.projects.step} title={t.projects.title} />

          <div className="space-y-6 lg:col-start-2">
            {featuredProjects.map((project, index) => (
              <Reveal
                key={project.title}
                className="space-y-6"
                delay={0.08 + index * 0.08}
              >
                <div className="group/card relative border border-stone-200 bg-white p-8 lg:p-10 transition-all duration-300 hover:border-stone-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] hover:-translate-y-0.5 overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent/0 group-hover/card:bg-accent/60 transition-all duration-300" />
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="font-serif text-3xl leading-none tracking-tight text-stone-900">
                      {project.title}
                    </h3>
                    <span className="inline-flex shrink-0 items-center border border-accent/30 bg-accent/6 px-2.5 py-0.5 text-[9px] font-medium tracking-[0.16em] uppercase text-accent">
                      {t.projects.featured}
                    </span>
                  </div>

                  <p className="text-sm text-stone-500 font-light leading-[1.75] mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 border-t border-stone-200 pt-4">
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
                  </div>
                </div>

                {index === featuredProjects.length - 1 && (
                  <div className="flex justify-end">
                    <CtaLink
                      to="/projects"
                      variant="inline"
                      size="micro"
                      className="group"
                    >
                      {t.projects.viewAll}
                      <ArrowUpRightIcon size={14} />
                    </CtaLink>
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
