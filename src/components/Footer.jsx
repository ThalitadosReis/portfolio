import {
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";
import { siteData } from "../data/siteData.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col sm:flex-row justify-between items-center gap-3 px-6 sm:px-14 py-6 border-t border-rule font-mono text-[11px] text-ink-2">
      <div>
        © {year} · {siteData.name}
      </div>

      <div className="flex items-center gap-4">
        <a
          href={`mailto:${siteData.email}`}
          className="text-mute hover:text-ink transition-colors duration-200"
          aria-label="Email"
        >
          <EnvelopeSimpleIcon size={14} />
        </a>
        {siteData.whatsappUrl && (
          <a
            href={siteData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-mute hover:text-ink transition-colors duration-200"
            aria-label="WhatsApp"
          >
            <WhatsappLogoIcon size={14} />
          </a>
        )}
        <a
          href={siteData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-mute hover:text-ink transition-colors duration-200"
          aria-label="GitHub"
        >
          <GithubLogoIcon size={14} />
        </a>
        <a
          href={siteData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-mute hover:text-ink transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <LinkedinLogoIcon size={14} />
        </a>
      </div>
    </footer>
  );
}
