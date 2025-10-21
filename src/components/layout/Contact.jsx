import { EnvelopeIcon, WhatsappLogoIcon } from "@phosphor-icons/react";
import SocialLinks from "../common/SocialLinks";

export default function Contact() {
  const email = "dosreistha@gmail.com";
  const whatsappPhone = import.meta.env.VITE_WHATSAPP_PHONE;

  return (
    <footer
      id="contact"
      className="bg-gray rounded-t-[75px] md:rounded-t-[100px] lg:rounded-t-[200px] overflow-hidden"
    >
      <div className="container lg:max-w-6xl mx-auto py-12 text-center space-y-12">
        <h2 className="uppercase font-medium text-5xl md:text-7xl lg:text-8xl leading-none">
          Let's <span className="font-newyork font-extrabold">Connect</span>
        </h2>

        <div className="flex justify-center items-center gap-5 text-xs">
          <button
            onClick={() => (window.location.href = `mailto:${email}`)}
            className="flex items-center gap-2 px-6 py-2 border-2 border-neutral rounded-full bg-black text-white hover:underline"
            aria-label="Send email"
          >
            <EnvelopeIcon size={20} weight="light" />
            Email
          </button>

          <button
            onClick={() =>
              window.open(`https://wa.me/${whatsappPhone}`, "_blank")
            }
            className="flex items-center gap-2 px-6 py-2 border-2 border-neutral rounded-full bg-offwhite hover:underline"
            aria-label="Send WhatsApp message"
          >
            <WhatsappLogoIcon size={20} weight="light" />
            WhatsApp
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between text-sm border-t border-black/10 pt-4">
          <span>© 2024 Thalita dos Reis</span>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
