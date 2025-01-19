import React, { useState } from "react";
import CV from "../assets/cv.pdf";
import SocialLinks from "./SocialLinks";
import ContactButton from "./ContactButton";

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
      .catch((error) => {
        console.error("Error copying email: ", error);
      });
  };

  return (
    <nav className="w-full pt-5 bg-soft-gray">
      <div className="container flex justify-between items-center mx-auto">
        <div className="flex items-center gap-3 text-xs">
          {/* Large Screen: Email and Copy Button */}
          <div className="hidden lg:flex items-center rounded-full border-2 border-neutral-light p-0.5">
            <span className="px-3">{email}</span>
            <ContactButton
              label={copied ? "Copied!" : "Copy"}
              onClick={handleCopyToClipboard}
              bgColor={copied ? "bg-neutral-light" : "bg-off-white"}
              textColor="text-black"
              ariaLabel="Copy email to clipboard"
              className="border-none"
            />
          </div>

          {/* Small Screen: Email Button */}
          <div className="lg:hidden">
            <ContactButton
              label="Email"
              url={`mailto:${email}`}
              bgColor="bg-black"
              textColor="text-white"
              ariaLabel="Send email"
            />
          </div>

          {/* CV Button */}
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

        {/* Social Links */}
        <SocialLinks />
      </div>
    </nav>
  );
}
