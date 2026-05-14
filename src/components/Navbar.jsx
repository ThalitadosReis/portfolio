import { useEffect } from "react";
import { useLang } from "../i18n/LangContext.jsx";

function smoothTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const { t, lang, setLang } = useLang();

  const navItems = [
    { id: "work", label: t.nav.projects, num: "01" },
    { id: "about", label: t.nav.about, num: "02" },
    { id: "contact", label: t.nav.contact, num: "03" },
  ];

  useEffect(() => {
    const topbar = document.getElementById("topbar");
    if (!topbar) return;
    const onScroll = () => {
      const past = window.scrollY > 24;
      topbar.style.borderBottomColor = past ? "var(--rule)" : "transparent";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e, id) => {
    e.preventDefault();
    smoothTo(id);
  };

  return (
    <header
      id="topbar"
      className="fixed inset-x-0 top-0 z-50 bg-bg transition-[border-color,padding] duration-300 border-b border-transparent"
    >
      <div className="flex items-center justify-between px-5 sm:px-14 py-3 sm:py-4 font-mono text-[11px] tracking-[0.02em]">
        <div className="flex items-center gap-2.5 text-ink">
          <span className="relative flex h-[7px] w-[7px]">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-700 opacity-75 [animation-duration:1.2s]" />
            <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-green-700" />
          </span>
          <span>{t.banner.available}</span>
        </div>

        {/* nav links + lang toggle */}
        <nav className="flex items-center gap-3 sm:gap-[22px]">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNav(e, item.id)}
              className="nav-link text-ink hidden sm:inline"
            >
              <span className="text-mute mr-1">[{item.num}]</span>
              {item.label}
            </a>
          ))}

          <span className="text-rule select-none hidden sm:inline">·</span>

          <span className="flex items-center">
            {["en", "de"].map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                className={`bg-transparent border-none cursor-pointer font-mono text-[11px] tracking-[0.02em] transition-colors duration-200 ${
                  lang === l
                    ? "text-ink font-medium"
                    : "text-mute hover:text-ink"
                }`}
              >
                [{l.toUpperCase()}]
              </button>
            ))}
          </span>
        </nav>
      </div>
    </header>
  );
}
