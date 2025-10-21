export default function ProjectCard({
  title,
  description,
  technologies,
  gitUrl,
  previewUrl,
}) {
  return (
    <section className="space-y-4">
      <header className="flex justify-between items-center mb-2">
        <h2 className="text-2xl lg:text-3xl uppercase">{title}</h2>

        <nav className="flex items-center gap-2 text-sm">
          <a
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            aria-label={`GitHub repository for ${title}`}
          >
            GitHub
          </a>
          <span>/</span>
          <a
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            aria-label={`Live preview of ${title}`}
          >
            Preview
          </a>
        </nav>
      </header>

      <ul className="flex flex-wrap gap-2 text-xs font-light">
        {technologies?.map((tech, index) => (
          <li
            key={index}
            className="px-3 py-1 bg-neutral rounded"
            aria-label={`Technology: ${tech}`}
          >
            {tech}
          </li>
        ))}
      </ul>

      <p className="text-sm font-light text-justify indent-8">{description}</p>
    </section>
  );
}
