import React from "react";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import SocialLinks from "./SocialLinks";
import ContactButton from "./ContactButton";

export default function Contact() {
  const email = "dosreistha@gmail.com";
  const whatsappPhone = process.env.REACT_APP_WHATSAPP_PHONE;

  return (
    <div
      className="section bg-soft-gray rounded-t-[75px] md:rounded-t-[100px] lg:rounded-t-[200px] overflow-hidden"
      id="contact"
    >
      <div className="container mx-auto text-center">
        {/* Title */}
        <h1 className="uppercase font-extrabold text-[35px] md:text-[60px] lg:text-[100px] leading-[0.8] my-10">
          Let's <span className="font-newyork">Connect</span>
        </h1>

        {/* Contact Buttons */}
        <div className="flex items-center justify-center gap-5 text-xs">
          <ContactButton
            icon={<FiMail />}
            label="Email"
            url={`mailto:${email}`}
            bgColor="bg-black"
            textColor="text-white"
            iconSize={15}
            ariaLabel="Send email"
          />
          <ContactButton
            icon={<FaWhatsapp />}
            label="WhatsApp"
            url={`https://wa.me/${whatsappPhone}`}
            bgColor="bg-off-white"
            textColor="text-text-dark"
            iconSize={15}
            ariaLabel="Send WhatsApp message"
          />
        </div>

        {/* Footer */}
        <div className="mt-10 text-sm">
          <div className="flex-grow border-t-2 border-neutral-light"></div>
          <div className="flex justify-between items-center my-3">
            <span>© 2024 Thalita dos Reis</span>
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
