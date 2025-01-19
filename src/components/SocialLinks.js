import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-3 text-sm">
      {/* Large Screen: Show Text-Links */}
      <div className="hidden lg:flex gap-3">
        <a
          href="https://www.linkedin.com/in/thalitadosreis/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-underline"
          aria-label="LinkedIn profile"
        >
          LinkedIn
        </a>
        <span>/</span>
        <a
          href="https://github.com/ThalitadosReis"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-underline"
          aria-label="GitHub profile"
        >
          GitHub
        </a>
      </div>

      {/* Small Screen: Show Icons */}
      <div className="flex lg:hidden gap-3">
        <a
          href="https://www.linkedin.com/in/thalitadosreis/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-off-white"
          aria-label="LinkedIn profile"
        >
          <FaLinkedin size={20} alt="LinkedIn icon" />
        </a>
        <a
          href="https://github.com/ThalitadosReis"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-off-white"
          aria-label="GitHub profile"
        >
          <FaGithub size={20} alt="GitHub icon" />
        </a>
      </div>
    </div>
  );
};
