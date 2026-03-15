import { ArrowRightIcon, ListIcon, XIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useLang } from "../i18n/LangContext.jsx";
import { siteData } from "../data/siteData.js";

function BrandLink({ className = "", dotClassName = "text-accent" }) {
  return (
    <Link
      to="/"
      className={`font-display text-xl leading-none tracking-tight ${className}`.trim()}
    >
      Thalita<span className={dotClassName}>.</span>
    </Link>
  );
}

function LanguageToggle({ currentLanguage, onToggle, className = "" }) {
  return (
    <button
      onClick={onToggle}
      className={`flex items-center gap-1.5 bg-transparent border-none cursor-pointer text-xs tracking-widest uppercase text-neutral-400 transition-colors duration-200 hover:text-accent/45 ${className}`.trim()}
    >
      <span
        className={currentLanguage === "en" ? "text-accent font-semibold" : ""}
      >
        EN
      </span>
      <span className="text-neutral-400">·</span>
      <span
        className={currentLanguage === "de" ? "text-accent font-semibold" : ""}
      >
        DE
      </span>
    </button>
  );
}

function DesktopNavLink({ item }) {
  return (
    <NavLink
      to={item.to}
      end={item.end}
      className={({ isActive }) =>
        `relative pb-px text-xs tracking-widest uppercase transition-colors duration-200 ${
          isActive ? "text-neutral-800" : "text-neutral-500 hover:text-accent"
        }`
      }
    >
      {({ isActive }) => (
        <>
          {item.label}
          {isActive && (
            <span className="absolute -bottom-px left-0 right-0 h-px bg-accent" />
          )}
        </>
      )}
    </NavLink>
  );
}

function MobileNavLink({ item }) {
  return (
    <NavLink
      to={item.to}
      end={item.end}
      className={({ isActive }) =>
        `group border-b border-neutral-200 py-5 transition-colors duration-200 ${
          isActive ? "text-neutral-600" : "text-neutral-800 hover:text-accent"
        }`
      }
    >
      <span className="flex items-center justify-between gap-4">
        <span className="font-display text-2xl tracking-tight">
          {item.label}
        </span>
        <ArrowRightIcon
          size={14}
          className="shrink-0 text-neutral-400 transition-colors duration-200 group-hover:text-accent"
        />
      </span>
    </NavLink>
  );
}

export default function Navbar() {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const currentLanguage = lang;
  
  const navItems = [
    { to: "/", label: t.nav.home, end: true },
    { to: "/projects", label: t.nav.projects },
    { to: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const toggleLanguage = () => {
    const newLang = currentLanguage === "en" ? "de" : "en";
    setLang(newLang);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? "border-b border-neutral-200 bg-neutral-100"
            : "border-b border-transparent bg-neutral-100"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <BrandLink className="text-neutral-700" />

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <DesktopNavLink key={item.to} item={item} />
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <LanguageToggle
              currentLanguage={currentLanguage}
              onToggle={toggleLanguage}
              className="hidden md:flex"
            />
          </div>

          <button
            onClick={() => setOpen((value) => !value)}
            className="md:hidden text-neutral-700 bg-transparent border-none cursor-pointer p-1"
            aria-label="Toggle menu"
          >
            {open ? <XIcon size={20} /> : <ListIcon size={20} />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 flex flex-col bg-neutral-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-14">
          <BrandLink
            className="text-neutral-800"
            dotClassName="text-neutral-600"
          />
          <button
            onClick={() => setOpen(false)}
            className="text-neutral-600 bg-transparent border-none cursor-pointer"
            aria-label="Close menu"
          >
            <XIcon size={20} />
          </button>
        </div>

        <div className="border-b border-neutral-200" />

        <nav className="flex-1 flex flex-col justify-center px-8">
          {navItems.map((item) => (
            <MobileNavLink key={item.to} item={item} />
          ))}
        </nav>

        <div className="px-8 pb-8 flex items-center justify-between border-t border-neutral-200 pt-6">
          <p className="text-xs text-neutral-400">{siteData.email}</p>
          <LanguageToggle
            currentLanguage={currentLanguage}
            onToggle={toggleLanguage}
          />
        </div>
      </div>
    </>
  );
}
