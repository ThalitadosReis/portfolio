import { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import projectsData from "../data/projectsData.js";
import SectionHeader from "./common/SectionHeader.jsx";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";

export default function Project() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const totalProjects = projectsData.length;

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? totalProjects - 1 : current - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === totalProjects - 1 ? 0 : current + 1,
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((current) =>
        current === totalProjects - 1 ? 0 : current + 1,
      );
    }, 7000);

    return () => clearInterval(intervalId);
  }, [totalProjects]);

  return (
    <section id="project" className="py-12 px-6">
      <div className="container lg:max-w-6xl mx-auto space-y-12">
        <SectionHeader step={t("projects.step")} title={t("projects.title")} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="text-center lg:text-left">
            <h2 className="uppercase text-3xl md:text-4xl lg:text-5xl leading-none">
              <Trans
                i18nKey="projects.headline"
                components={{
                  1: <span className="lg:block font-newyork" />,
                }}
              />
            </h2>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden">
              <ul
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {projectsData.map((project, index) => (
                  <li key={project.id} className="w-full shrink-0">
                    <article className="space-y-4">
                      <div className="overflow-hidden">
                        <img
                          src={project.image}
                          alt={`${t(`projects.items.${index}.title`)} preview`}
                          className="w-full h-64 md:h-96 object-cover object-[25%_5%] grayscale-45 scale-110"
                          loading="lazy"
                        />
                      </div>

                      <section className="py-6 pt-1 space-y-4">
                        <header className="flex justify-between items-start gap-3">
                          <h3 className="text-2xl lg:text-3xl uppercase">
                            {t(`projects.items.${index}.title`)}
                          </h3>

                          <nav className="flex items-center gap-3 text-sm shrink-0">
                            <a
                              href={project.gitUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                              aria-label={`GitHub repository for ${t(
                                `projects.items.${index}.title`,
                              )}`}
                            >
                              GitHub
                            </a>
                            /
                            <a
                              href={project.previewUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                              aria-label={`Live preview of ${t(
                                `projects.items.${index}.title`,
                              )}`}
                            >
                              Preview
                            </a>
                          </nav>
                        </header>

                        <ul className="flex flex-wrap gap-2 text-xs font-light">
                          {project.technologies?.map((tech, techIndex) => (
                            <li
                              key={techIndex}
                              className="px-3 py-1 bg-neutral rounded"
                            >
                              {tech}
                            </li>
                          ))}
                        </ul>

                        <p className="text-sm font-light text-justify">
                          {t(`projects.items.${index}.description`)}
                        </p>
                      </section>
                    </article>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-light">{t("projects.moreProjects")}</p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={goToPrevious}
                  className="relative flex items-center justify-center w-10 h-10 transform rotate-45 border border-black/10 rounded-lg bg-offwhite hover:bg-gray/40 transition-colors"
                  aria-label="Previous project"
                >
                  <span className="flex items-center justify-center -rotate-45">
                    <CaretLeftIcon size={16} />
                  </span>
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  className="relative flex items-center justify-center w-10 h-10 transform rotate-45 border border-black/10 rounded-lg bg-offwhite hover:bg-gray/40 transition-colors"
                  aria-label="Next project"
                >
                  <span className="flex items-center justify-center -rotate-45">
                    <CaretRightIcon size={16} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
