import {
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import CtaLink from "./ui/CtaLink.jsx";
import { siteData } from "../data/siteData.js";
import { useLang } from "../i18n/LangContext.jsx";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-6">
          <span className="font-display text-xl leading-none text-neutral-700">
            Thalita<span className="text-neutral-600">.</span>
          </span>
          <span className="text-neutral-400 hidden sm:block">·</span>
          <span className="hidden text-[0.65rem] leading-4 tracking-[0.1em] text-neutral-400 sm:block">
            © {year}
          </span>
        </div>

        <nav className="flex items-center gap-5">
          <Link
            to="/"
            className="text-[0.65rem] leading-4 tracking-[0.1em] uppercase text-neutral-500 transition-colors duration-200 hover:text-neutral-800"
          >
            {t.nav.home}
          </Link>
          <Link
            to="/projects"
            className="text-[0.65rem] leading-4 tracking-[0.1em] uppercase text-neutral-500 transition-colors duration-200 hover:text-neutral-800"
          >
            {t.nav.projects}
          </Link>
          <Link
            to="/contact"
            className="text-[0.65rem] leading-4 tracking-[0.1em] uppercase text-neutral-500 transition-colors duration-200 hover:text-neutral-800"
          >
            {t.nav.contact}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <CtaLink
            href={siteData.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="square"
            size="square"
          >
            <GithubLogoIcon size={14} />
          </CtaLink>
          <CtaLink
            href={siteData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            variant="square"
            size="square"
          >
            <LinkedinLogoIcon size={14} />
          </CtaLink>
          <CtaLink
            href={`mailto:${siteData.email}`}
            variant="square"
            size="square"
          >
            <EnvelopeSimpleIcon size={14} />
          </CtaLink>
          {siteData.whatsappUrl && (
            <CtaLink
              href={siteData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="square"
              size="square"
            >
              <WhatsappLogoIcon size={14} />
            </CtaLink>
          )}
        </div>
      </div>
    </footer>
  );
}
