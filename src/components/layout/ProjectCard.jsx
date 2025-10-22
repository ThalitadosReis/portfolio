import { useTranslation } from "react-i18next";

export default function ProjectCard({
  technologies,
  gitUrl,
  previewUrl,
  index,
}) {
  const { t } = useTranslation();
  return (
    <section className="space-y-4">
      <header className="flex justify-between items-center mb-2">
        <h2 className="text-2xl lg:text-3xl uppercase">{t(`projects.items.${index}.title`)}</h2>

        <nav className="flex items-center gap-2 text-sm">
          <a
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            aria-label={`GitHub repository for ${t(`projects.items.${index}.title`)}`}
          >
            GitHub
          </a>
          <span>/</span>
          <a
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            aria-label={`Live preview of ${t(`projects.items.${index}.title`)}`}
          >
            Preview
          </a>
        </nav>
      </header>

      <ul className="flex flex-wrap gap-2 text-xs font-light">
        {technologies?.map((tech, techIndex) => (
          <li
            key={techIndex}
            className="px-3 py-1 bg-neutral rounded"
            aria-label={`Technology: ${tech}`}
          >
            {tech}
          </li>
        ))}
      </ul>

      <p className="text-sm font-light text-justify indent-8">{t(`projects.items.${index}.description`)}</p>
    </section>
  );
}
