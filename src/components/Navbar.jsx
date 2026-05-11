import { ArrowRightIcon, ListIcon, XIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useLang } from "../i18n/LangContext.jsx";
import { siteData } from "../data/siteData.js";

function BrandLink({ className = "", dotClassName = "text-accent" }) {
  return (
    <Link
      to="/"
      className={`font-serif text-xl leading-none tracking-tight ${className}`.trim()}
    >
      Thalita<span className={dotClassName}>.</span>
    </Link>
  );
}

function LanguageToggle({ currentLanguage, onToggle, className = "" }) {
  return (
    <button
      onClick={onToggle}
      className={`flex items-center gap-1.5 bg-transparent border-none cursor-pointer text-[10px] font-medium tracking-[0.18em] uppercase text-stone-400 transition-colors duration-200 hover:text-accent/60 ${className}`.trim()}
    >
      <span
        className={currentLanguage === "en" ? "text-accent" : ""}
      >
        EN
      </span>
      <span className="text-stone-300">·</span>
      <span
        className={currentLanguage === "de" ? "text-accent" : ""}
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
        `relative pb-px text-[10px] font-medium tracking-[0.18em] uppercase transition-colors duration-200 ${
          isActive ? "text-stone-800" : "text-stone-400 hover:text-accent"
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
        `group border-b border-stone-100 py-5 transition-colors duration-200 ${
          isActive ? "text-stone-500" : "text-stone-800 hover:text-accent"
        }`
      }
    >
      <span className="flex items-center justify-between gap-4">
        <span className="font-serif text-2xl tracking-tight">{item.label}</span>
        <ArrowRightIcon
          size={14}
          className="shrink-0 text-stone-300 transition-colors duration-200 group-hover:text-accent"
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
      <div className="fixed top-4 inset-x-4 z-50 flex justify-center pointer-events-none">
        <header
          className={`w-full max-w-5xl pointer-events-auto rounded-2xl transition-all duration-500 ${
            scrolled
              ? "bg-white/95 backdrop-blur-xl border border-stone-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
              : "bg-white/75 backdrop-blur-md border border-stone-100/60 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
          }`}
        >
          <div className="px-6 h-14 flex items-center justify-between">
            <BrandLink className="text-stone-800" dotClassName="text-accent" />

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <DesktopNavLink key={item.to} item={item} />
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <LanguageToggle
                currentLanguage={currentLanguage}
                onToggle={toggleLanguage}
              />
            </div>

            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden text-stone-700 bg-transparent border-none cursor-pointer p-1"
              aria-label="Toggle menu"
            >
              {open ? <XIcon size={20} /> : <ListIcon size={20} />}
            </button>
          </div>
        </header>
      </div>

      {/* mobile drawer */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-stone-50 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-14 border-b border-stone-100">
          <BrandLink className="text-stone-800" dotClassName="text-accent" />
          <button
            onClick={() => setOpen(false)}
            className="text-stone-500 bg-transparent border-none cursor-pointer"
            aria-label="Close menu"
          >
            <XIcon size={20} />
          </button>
        </div>

        <nav className="flex-1 flex flex-col justify-center px-8">
          {navItems.map((item) => (
            <MobileNavLink key={item.to} item={item} />
          ))}
        </nav>

        <div className="px-8 pb-8 flex items-center justify-between border-t border-stone-100 pt-6">
          <p className="text-[10px] font-medium tracking-[0.15em] text-stone-400">
            {siteData.email}
          </p>
          <LanguageToggle
            currentLanguage={currentLanguage}
            onToggle={toggleLanguage}
          />
        </div>
      </div>
    </>
  );
}
