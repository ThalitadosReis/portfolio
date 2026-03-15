import { ArrowRightIcon, ListIcon, XIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useLang } from "../i18n/LangContext.jsx";
import { siteData } from "../data/siteData.js";

export default function Navbar() {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const currentLanguage = lang;

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
          <Link
            to="/"
            className="font-display text-xl leading-none tracking-tight text-neutral-800 transition-colors duration-300 hover:text-neutral-600"
          >
            Thalita<span className="text-neutral-600">.</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `text-xs tracking-widest uppercase relative pb-px transition-colors duration-200 ${
                  isActive
                    ? "text-neutral-800"
                    : "text-neutral-500 hover:text-neutral-700"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {t.nav.home}
                  {isActive && (
                    <span className="absolute -bottom-px left-0 right-0 h-px bg-neutral-600" />
                  )}
                </>
              )}
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `text-xs tracking-widest uppercase relative pb-px transition-colors duration-200 ${
                  isActive
                    ? "text-neutral-800"
                    : "text-neutral-500 hover:text-neutral-700"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {t.nav.projects}
                  {isActive && (
                    <span className="absolute -bottom-px left-0 right-0 h-px bg-neutral-600" />
                  )}
                </>
              )}
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-xs tracking-widest uppercase relative pb-px transition-colors duration-200 ${
                  isActive
                    ? "text-neutral-800"
                    : "text-neutral-500 hover:text-neutral-700"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {t.nav.contact}
                  {isActive && (
                    <span className="absolute -bottom-px left-0 right-0 h-px bg-neutral-600" />
                  )}
                </>
              )}
            </NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className="flex items-center gap-1.5 text-xs tracking-widest uppercase cursor-pointer bg-transparent border-none text-neutral-500 hover:text-neutral-800 transition-colors duration-200"
            >
              <span
                className={
                  currentLanguage === "en" ? "text-neutral-800 font-medium" : ""
                }
              >
                EN
              </span>
              <span className="text-neutral-300">·</span>
              <span
                className={
                  currentLanguage === "de" ? "text-neutral-800 font-medium" : ""
                }
              >
                DE
              </span>
            </button>
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
          <Link
            to="/"
            className="font-display text-xl leading-none tracking-tight text-neutral-800"
          >
            Thalita<span className="text-neutral-600">.</span>
          </Link>
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
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `group border-b border-neutral-200 py-5 transition-colors duration-200 ${
                isActive
                  ? "text-neutral-600"
                  : "text-neutral-800 hover:text-neutral-600"
              }`
            }
          >
            <span className="flex items-center justify-between gap-4">
              <span className="font-display text-3xl tracking-tight">
                {t.nav.home}
              </span>
              <ArrowRightIcon
                size={16}
                className="shrink-0 text-neutral-400 transition-colors duration-200 group-hover:text-neutral-600"
              />
            </span>
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `group border-b border-neutral-200 py-5 transition-colors duration-200 ${
                isActive
                  ? "text-neutral-600"
                  : "text-neutral-800 hover:text-neutral-600"
              }`
            }
          >
            <span className="flex items-center justify-between gap-4">
              <span className="font-display text-3xl tracking-tight">
                {t.nav.projects}
              </span>
              <ArrowRightIcon
                size={16}
                className="shrink-0 text-neutral-400 transition-colors duration-200 group-hover:text-neutral-600"
              />
            </span>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `group border-b border-neutral-200 py-5 transition-colors duration-200 ${
                isActive
                  ? "text-neutral-600"
                  : "text-neutral-800 hover:text-neutral-600"
              }`
            }
          >
            <span className="flex items-center justify-between gap-4">
              <span className="font-display text-3xl tracking-tight">
                {t.nav.contact}
              </span>
              <ArrowRightIcon
                size={16}
                className="shrink-0 text-neutral-400 transition-colors duration-200 group-hover:text-neutral-600"
              />
            </span>
          </NavLink>
        </nav>

        <div className="px-8 pb-10 flex items-center justify-between border-t border-neutral-200 pt-6">
          <p className="text-xs text-neutral-400">{siteData.email}</p>
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-xs tracking-widest uppercase text-neutral-500 bg-transparent border-none cursor-pointer"
          >
            <span
              className={
                currentLanguage === "en" ? "text-neutral-800 font-semibold" : ""
              }
            >
              EN
            </span>
            <span className="text-neutral-300">·</span>
            <span
              className={
                currentLanguage === "de" ? "text-neutral-800 font-semibold" : ""
              }
            >
              DE
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
