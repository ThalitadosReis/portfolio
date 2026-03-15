const whatsappPhone = "+41 76 566 49 21";
const email = "dosreistha@gmail.com";
const whatsappHref = whatsappPhone.replace(/\D/g, "");

export const siteData = {
  email,
  whatsappPhone,
  whatsappUrl: whatsappHref ? `https://wa.me/${whatsappHref}` : null,
  location: "Lenzburg, Switzerland",
  github: "https://github.com/ThalitadosReis",
  linkedin: "https://www.linkedin.com/in/thalitadosreis/",
};
