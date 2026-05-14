import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { useLang } from "../../i18n/LangContext.jsx";
import { getLocalizedProjects } from "../../data/projectsData.js";
import { siteData } from "../../data/siteData.js";
import ProjectDrawer from "../ui/ProjectDrawer.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

export default function Project() {
  const { t, lang } = useLang();
  const projects = getLocalizedProjects(lang);

  return (
    <section id="work" className="px-6 sm:px-14 py-20 sm:py-28">
      <SectionHeading
        label={`01 / ${t.projects.eyebrow}`}
        title={t.projects.title}
        aside={
          <a
            href={siteData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-ink transition-colors duration-200"
          >
            More on GitHub <ArrowUpRightIcon size={10} />
          </a>
        }
      />

      <div className="border-b border-rule">
        {projects.map((p, i) => (
          <ProjectDrawer
            key={p.title}
            project={p}
            num={String(i + 1).padStart(2, "0")}
          />
        ))}
      </div>
    </section>
  );
}
