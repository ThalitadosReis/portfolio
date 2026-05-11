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
    <main className="flex min-h-screen flex-col bg-stone-50 pt-20">
      <PageIntro label={t.projects.title} title={t.projects.title} />

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col overflow-hidden border border-stone-200">
            {projects.map((project, index) => (
              <Reveal
                key={project.title}
                delay={index * 0.06}
                className="relative bg-white transition-all duration-300 group border-b border-stone-200 last:border-0 hover:bg-stone-50/50 hover:shadow-[inset_2px_0_0_0_rgba(208,126,66,0.45)]"
              >
                <article className="p-7 lg:p-10">
                  <div className="flex items-start justify-between gap-6 mb-5">
                    <div className="flex items-start gap-3">
                      <span className="text-[10px] font-medium text-accent/70 tracking-[0.16em] uppercase mt-0.5">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="font-serif text-2xl leading-none text-stone-900 transition-colors duration-200 group-hover:text-stone-600 lg:text-3xl">
                        {project.title}
                      </h2>
                    </div>

                    <div className="hidden shrink-0 items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:flex">
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

                  <div className="ml-8 space-y-6">
                    <p className="text-sm text-stone-500 font-light leading-[1.75] max-w-xl">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Tag key={tech}>{tech}</Tag>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 mt-6 pt-4 border-t border-stone-200">
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
