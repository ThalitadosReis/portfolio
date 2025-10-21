import { useState } from "react";
const CV = import.meta.env.VITE_CV;

import SocialLinks from "../common/SocialLinks.jsx";

export default function Nav() {
  const [copied, setCopied] = useState(false);
  const email = "dosreistha@gmail.com";

  const handleCopyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((error) => console.error("Error copying email:", error));
  };

  return (
    <nav className="bg-gray py-8">
      <div className="container lg:lg:max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 text-xs">
          {/* desktop */}
          <div className="hidden lg:flex items-center rounded-full border-2 border-neutral">
            <span className="px-6">{email}</span>
            <button
              onClick={handleCopyToClipboard}
              aria-label="Copy email to clipboard"
              className={`px-6 py-2 rounded-full border-none ${
                copied ? "bg-neutral" : "bg-offwhite"
              } hover:underline`}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          {/* mobile */}
          <div className="lg:hidden">
            <button
              onClick={() => (window.location.href = `mailto:${email}`)}
              aria-label="Send email"
              className="px-6 py-2 rounded-full border-2 border-neutral bg-black text-white hover:underline"
            >
              Email
            </button>
          </div>

          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View CV"
            className="px-6 py-2 rounded-full border-2 border-neutral bg-offwhite hover:underline"
          >
            CV
          </a>
        </div>

        <SocialLinks />
      </div>
    </nav>
  );
}
