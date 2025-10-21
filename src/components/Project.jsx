import projectsData from "../data/projectsData.js";
import ProjectCard from "./layout/ProjectCard.jsx";
import SectionHeader from "./common/SectionHeader.jsx";

export default function Project() {
  return (
    <section id="project" className="py-12 px-6">
      <div className="container lg:max-w-6xl mx-auto space-y-12">
        <SectionHeader step="02" title="Projects" />
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="uppercase text-3xl md:text-4xl lg:text-5xl leading-none">
              What I've <span className="lg:block font-newyork">Built</span>
            </h2>
          </div>

          <ul className="flex-1 space-y-8">
            {projectsData.map((project, index) => (
              <li key={index}>
                <ProjectCard {...project} />
              </li>
            ))}
            <p className="text-sm font-light">
              More projects on GitHub
            </p>
          </ul>
        </div>
      </div>
    </section>
  );
}
