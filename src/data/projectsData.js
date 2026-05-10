const projects = [
  {
    title: "Cafe Template",
    description: {
      en: "Reusable cafe website template with a drag-and-drop admin panel for managing and persisting menu items via MongoDB. Contact emails are handled by Netlify Functions in production and an Express server locally, making it easy to clone and deploy.",
      de: "Wiederverwendbares Cafe-Website-Template mit einem Drag-and-Drop-Adminbereich zum Verwalten und Speichern von Menueintraegen ueber MongoDB. Kontakt-E-Mails werden in der Produktion ueber Netlify Functions und lokal ueber einen Express-Server verarbeitet.",
    },
    technologies: [
      "React",
      "Tailwind CSS",
      "DnD Kit",
      "Nodemailer",
      "Express",
      "MongoDB",
    ],
    gitUrl: "https://github.com/ThalitadosReis/cafe-template",
    previewUrl: "https://boldbrew-cafe.netlify.app/",
  },
  {
    title: "Salon Template",
    description: {
      en: "Salon website template with a service overview, booking request form, and email delivery via Express and Nodemailer. Includes legal pages for compliance-ready deployments and a clean multi-page React structure ready to customize and ship.",
      de: "Salon-Website-Template mit Leistungsuebersicht, Buchungsanfrageformular und E-Mail-Versand ueber Express und Nodemailer. Enthaelt rechtskonforme Seiten wie Impressum und Datenschutz sowie eine klare mehrseitige React-Struktur.",
    },
    technologies: ["React", "Tailwind CSS", "Express", "Nodemailer"],
    gitUrl: "https://github.com/ThalitadosReis/salon-template",
    previewUrl: "https://maison-salon.netlify.app/",
  },

  {
    title: "Brew Commerce",
    highlight: true,
    description: {
      en: "Coffee e-commerce platform built with Next.js, custom JWT authentication, and MongoDB. Ships a marketing site, a full shopping experience with Stripe checkout, and a protected admin console for managing products and orders.",
      de: "Kaffee-E-Commerce-Plattform, entwickelt mit Next.js, eigener JWT-Authentifizierung und MongoDB. Beinhaltet eine Marketing-Site, ein vollstaendiges Einkaufserlebnis mit Stripe-Checkout und einen geschuetzten Admin-Bereich fuer Produkte und Bestellungen.",
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
      en: "Responsive website for a physiotherapy clinic with a service overview, interactive booking form with date and time selection, FAQ section, and email handling for appointment and contact requests.",
      de: "Responsive Website fuer eine Physiotherapiepraxis mit Leistungsuebersicht, interaktivem Buchungsformular mit Datums- und Uhrzeitauswahl, FAQ-Bereich und E-Mail-Verarbeitung fuer Termin- und Kontaktanfragen.",
    },
    technologies: [
      "React",
      "React Router",
      "Tailwind CSS",
      "Netlify Functions",
      "Express",
      "Nodemailer",
    ],
    gitUrl: "https://github.com/ThalitadosReis/physio-website",
    previewUrl: "https://physioplus-web.netlify.app/",
  },
  {
    title: "Brewtopia Café",
    description: {
      en: "Marketing website for a coffee brand featuring a homepage, interactive menu, and contact section. Built as a clean React SPA with modular components, Tailwind CSS styling, and Vite for fast builds and easy deployment.",
      de: "Marketing-Website fuer eine Kaffeemarke mit Startseite, interaktivem Menue und Kontaktbereich. Als sauberes React-SPA mit modularen Komponenten, Tailwind-CSS-Styling und Vite fuer schnelle Builds und einfaches Deployment entwickelt.",
    },
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    gitUrl: "https://github.com/ThalitadosReis/cafe-website",
    previewUrl: "https://brewtopiacafe.netlify.app/",
  },
  {
    title: "Moonlight",
    description: {
      en: "Full-stack event discovery platform built with the MERN stack for browsing, promoting, and attending concerts, festivals, and workshops. Features real-time interactions via Socket.io, developed as the capstone project for Ironhack's Web Development Bootcamp.",
      de: "Full-Stack-Event-Plattform auf Basis des MERN-Stacks zum Entdecken, Bewerben und Besuchen von Konzerten, Festivals und Workshops. Mit Echtzeit-Interaktionen ueber Socket.io, entwickelt als Abschlussprojekt des Ironhack Web Development Bootcamps.",
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
