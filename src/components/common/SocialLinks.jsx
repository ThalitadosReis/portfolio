import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

const links = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/thalitadosreis/",
    icon: LinkedinLogoIcon,
    ariaLabel: "LinkedIn profile",
  },
  {
    name: "GitHub",
    href: "https://github.com/ThalitadosReis",
    icon: GithubLogoIcon,
    ariaLabel: "GitHub profile",
  },
];

import React from "react";

export default function SocialLinks() {
  return (
    <div className="flex items-center text-sm">
      {/* desktop */}
      <div className="hidden lg:flex gap-2">
        {links.map((link, index) => (
          <span key={link.name} className="flex items-center gap-2">
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              aria-label={link.ariaLabel}
            >
              {link.name}
            </a>
            {index < links.length - 1 && <span>/</span>}
          </span>
        ))}
      </div>

      {/* mobile */}
      <div className="flex lg:hidden gap-2">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-offwhite hover:bg-gray-100 transition-colors"
              aria-label={link.ariaLabel}
            >
              <Icon size={20} weight="fill" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
