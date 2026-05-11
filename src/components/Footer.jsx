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

  const navItems = [
    { to: "/", label: t.nav.home },
    { to: "/projects", label: t.nav.projects },
    { to: "/contact", label: t.nav.contact },
  ];

  return (
    <footer className="border-t border-stone-200 bg-stone-50/80">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-5">
          <span className="font-serif text-xl leading-none tracking-tight text-stone-800">
            Thalita<span className="text-accent">.</span>
          </span>
          <span className="text-stone-300 hidden sm:block">·</span>
          <span className="hidden text-[10px] font-medium tracking-[0.16em] text-stone-400 sm:block">
            © {year}
          </span>
        </div>

        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <CtaLink key={item.to} to={item.to} variant="inline" size="micro">
              {item.label}
            </CtaLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
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
