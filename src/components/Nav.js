import React, { useState } from "react";

// copy of cv
import CV from "../assets/cv.pdf";
import SocialLinks from "./SocialLinks";

export default function Nav() {
  const [copied, setCopied] = useState(false);
  const email = "dosreistha@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((error) => {
        console.error("Error copying email: ", error);
      });
  };

  return (
    <nav className="w-full pt-5 bg-soft-gray">
      <div className="container flex justify-between items-center mx-auto">
        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center">
            {/* Large Screen: Show Email and Copy Button */}
            <div className="hidden lg:flex items-center rounded-full border-2 border-neutral-light p-0.5">
              <span className="px-3">{email}</span>
              <button
                onClick={copyToClipboard}
                className={`px-4 py-2 rounded-full focus:outline-none transition-all hover-underline
                ${copied ? "bg-neutral-light text-black" : "bg-off-white"}`}
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            {/* Smaller Screen: Show Single Button */}
            <button
              onClick={() => (window.location.href = `mailto:${email}`)}
              className="lg:hidden px-6 py-2 rounded-full border-2 border-neutral-light bg-black text-white hover-underline"
              aria-label="Send email"
            >
              Email
            </button>
          </div>
          <a
            className="px-6 py-2 rounded-full border-2 border-neutral-light bg-off-white hover-underline"
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View CV"
          >
            CV
          </a>
        </div>

       <SocialLinks />
      </div>
    </nav>
  );
}
