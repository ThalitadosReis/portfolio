const whatsappPhone = "+41 76 566 49 21";
const email = "dosreistha@gmail.com";
const whatsappHref = whatsappPhone.replace(/\D/g, "");

export const siteData = {
  name: "Thalita dos Reis",
  languages: "EN · DE · PT · ES",
  email,
  whatsappPhone,
  whatsappUrl: whatsappHref ? `https://wa.me/${whatsappHref}` : null,
  github: "https://github.com/ThalitadosReis",
  linkedin: "https://www.linkedin.com/in/thalitadosreis/",
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Git",
    "Stripe",
    "Socket.io",
    "Nodemailer",
    "Vite",
  ],
};
