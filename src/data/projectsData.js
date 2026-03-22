const projects = [
  {
    title: "Cafe Template",
    description: {
      en: "Modern cafe website template with menu management, email flows, and production-ready API handling using Netlify Functions, plus an Express backend for local development.",
      de: "Modernes Cafe-Website-Template mit Menueverwaltung, E-Mail-Flows und produktionsreifer API-Anbindung ueber Netlify Functions sowie einem Express-Backend fuer die lokale Entwicklung.",
    },
    technologies: [
      "React",
      "React Router",
      "Tailwind CSS",
      "DnD Kit",
      "Nodemailer",
      "Express",
      "MongoDB",
    ],
    gitUrl: "https://github.com/ThalitadosReis/cafe-template",
    previewUrl: "https://template-cafe.netlify.app/",
  },
  {
    title: "Salon Template",
    description: {
      en: "Modern salon website template built for bookings and service presentation, with a React frontend and a small Express plus Nodemailer backend for reservation emails.",
      de: "Modernes Salon-Website-Template fuer Buchungen und Leistungsdarstellung, mit React-Frontend und einem kleinen Express- plus Nodemailer-Backend fuer Reservierungs-E-Mails.",
    },
    technologies: [
      "React",
      "Tailwind CSS",
      "Express",
      "Nodemailer",
    ],
    gitUrl: "https://github.com/ThalitadosReis/salon-template",
    previewUrl: "https://template-salon.netlify.app/",
  },

  {
    title: "Brew Commerce",
    highlight: true,
    description: {
      en: "E-commerce platform built with Next.js, custom JWT authentication, and MongoDB. It includes a storefront, product discovery flow, Stripe checkout, and a protected admin area for products and orders.",
      de: "E-Commerce-Plattform, entwickelt mit Next.js, eigener JWT-Authentifizierung und MongoDB. Sie umfasst eine Storefront, eine Produktsuche, Stripe-Checkout und einen geschuetzten Admin-Bereich fuer Produkte und Bestellungen.",
    },
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "JWT Auth",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "Stripe",
      "Nodemailer",
    ],
    gitUrl: "https://github.com/ThalitadosReis/brew-commerce",
    previewUrl: "https://brew-commerce.vercel.app/",
  },

  {
    title: "Physio+",
    description: {
      en: "Responsive website for a physiotherapy practice focused on clarity and trust. It highlights services, supports appointment requests, and guides visitors through a clean, accessible interface.",
      de: "Responsive Website fuer eine Physiotherapiepraxis mit Fokus auf Klarheit und Vertrauen. Sie praesentiert Leistungen, unterstuetzt Terminanfragen und fuehrt Besucher durch eine klare, barrierearme Oberflaeche.",
    },
    technologies: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "Express.js",
      "Nodemailer",
    ],
    gitUrl: "https://github.com/ThalitadosReis/physio-website",
    previewUrl: "https://physioplus-web.netlify.app/",
  },
  {
    title: "Brewtopia Café",
    description: {
      en: "Marketing website for a cafe brand with a warm, editorial feel. It showcases the menu, brand story, and contact details in a responsive React interface.",
      de: "Marketing-Website fuer eine Cafemarke mit warmer, editorialer Anmutung. Sie zeigt Speisekarte, Markengeschichte und Kontaktdaten in einer responsiven React-Oberflaeche.",
    },
    technologies: ["React.js", "Tailwind CSS", "JavaScript"],
    gitUrl: "https://github.com/ThalitadosReis/cafe-website",
    previewUrl: "https://brewtopiacafe.netlify.app/",
  },
  {
    title: "Moonlight",
    description: {
      en: "Event discovery platform built with the MERN stack for browsing, promoting, and attending concerts, festivals, workshops, and more. It was created as the final project for Ironhack's Web Development Bootcamp.",
      de: "Event-Plattform auf Basis des MERN-Stacks zum Entdecken, Bewerben und Besuchen von Konzerten, Festivals, Workshops und mehr. Sie entstand als Abschlussprojekt des Web Development Bootcamps von Ironhack.",
    },
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Socket.io"],
    gitUrl:
      "https://github.com/JoTa-Events/moonlight-client?tab=readme-ov-file",
  },
];

export function getLocalizedProjects(language = "en") {
  const locale = language?.startsWith("de") ? "de" : "en";

  return projects.map((project) => ({
    ...project,
    description: project.description[locale],
  }));
}
