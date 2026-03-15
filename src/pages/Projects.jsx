import { ArrowUpRightIcon, GithubLogoIcon } from "@phosphor-icons/react";
import CtaLink from "../components/ui/CtaLink.jsx";
import PageIntro from "../components/ui/PageIntro.jsx";
import Tag from "../components/ui/Tag.jsx";
import Reveal from "../components/Reveal.jsx";
import { getLocalizedProjects } from "../data/projectsData.js";
import { useLang } from "../i18n/LangContext.jsx";

export default function Projects() {
  const { t, lang } = useLang();
  const projects = getLocalizedProjects(lang);

  return (
    <main className="pt-14 min-h-screen">
      <PageIntro label={t.projects.title} title={t.projects.title} />

      <section className="py-16 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col gap-px overflow-hidden rounded-sm border border-neutral-200 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.06)]">
            {projects.map((project, index) => (
              <Reveal
                key={project.title}
                delay={index * 0.08}
                className="bg-neutral-50 hover:bg-neutral-100 transition-colors duration-200 group border-b border-neutral-200 last:border-0"
              >
                <article className="p-7 lg:p-8">
                  <div className="flex items-start justify-between gap-6 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="w-5 shrink-0 text-[0.65rem] leading-4 tracking-[0.1em] text-neutral-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="font-display text-2xl leading-none tracking-tight text-neutral-800 transition-colors duration-200 group-hover:text-neutral-600 lg:text-3xl">
                        {project.title}
                      </h2>
                      {project.highlight && (
                        <span className="inline-flex items-center rounded-sm border border-neutral-600/25 bg-neutral-600/10 px-2.5 py-0.5 text-[0.65rem] font-medium leading-4 tracking-[0.1em] uppercase text-neutral-600">
                          {t.projects.featured}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <CtaLink
                        href={project.gitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="square"
                        size="square"
                      >
                        <GithubLogoIcon size={14} />
                      </CtaLink>
                      {project.previewUrl && (
                        <CtaLink
                          href={project.previewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="square"
                          size="square"
                        >
                          <ArrowUpRightIcon size={14} />
                        </CtaLink>
                      )}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-neutral-600 leading-relaxed font-light mb-5 max-w-2xl ml-8">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 ml-8">
                      {project.technologies.map((tech) => (
                        <Tag key={tech}>{tech}</Tag>
                      ))}
                    </div>

                    <div className="flex items-center gap-5 mt-5 pt-5 border-t border-neutral-200 ml-8">
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
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
