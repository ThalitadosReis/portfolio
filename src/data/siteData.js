const whatsappPhone = import.meta.env.VITE_WHATSAPP_PHONE ?? "";
const email = "dosreistha@gmail.com";

export const siteData = {
  email,
  whatsappPhone,
  whatsappUrl: whatsappPhone ? `https://wa.me/${whatsappPhone}` : null,
  location: "Lenzburg, Switzerland",
  github: "https://github.com/ThalitadosReis",
  linkedin: "https://www.linkedin.com/in/thalitadosreis/",
};
