import React from "react";

export default function ProjectCard({
  title,
  description,
  technologies,
  gitUrl,
  previewUrl,
}) {
  return (
    <div className="mb-10">
      <div className="flex flex-col gap-3 leading-1">
        {/* Title and Links */}
        <header className="flex justify-between items-center">
          <h1 className="uppercase text-[20px] lg:text-[35px] font-bold">
            {title}
          </h1>
          <div className="flex items-center gap-3 text-sm">
            <a
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-underline"
              aria-label={`View the GitHub repository for ${title}`}
            >
              GitHub
            </a>
            <span>/</span>
            <a
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-underline"
              aria-label={`Preview the project: ${title}`}
            >
              Preview
            </a>
          </div>
        </header>

        {/* Technologies */}
        <ul className="flex flex-wrap gap-2 text-xs font-semibold text-black/50">
          {technologies.map((tech, index) => (
            <li
              key={index}
              className="px-2 py-1 bg-soft-gray rounded-md shadow-sm"
              aria-label={`Technology used: ${tech}`}
            >
              {tech}
            </li>
          ))}
        </ul>

        {/* Description */}
        <p className="text-sm text-justify">{description}</p>
      </div>
    </div>
  );
}
