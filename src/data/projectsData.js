const baseProjects = [
  {
    title: "Brew Commerce",
    image:
      "https://res.cloudinary.com/douen1dwv/image/upload/v1767795335/default/Brew_Commerce_3.15pm_01-07_xhvnpu.jpg",
    description:
      "Modern coffee storefront built with Next.js App Router, Clerk auth, and MongoDB. The app ships a polished marketing site, a customer shopping experience (including collection, product, checkout, and profile), and an admin console for managing orders, products, and analytics.",
    technologies: [
      "Next.js 15",
      "React",
      "TypeScript",
      "Clerk",
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
    image:
      "https://res.cloudinary.com/douen1dwv/image/upload/v1762962848/default/Physio__4.52pm_11-12_1_e324n0.jpg",
    description:
      "Physio+ is a modern, responsive physiotherapy practice website designed to connect patients with professional care services. Features a clean hero section, interactive service cards showcasing various treatments, and integrated appointment booking. Built with React and styled with Tailwind CSS for optimal accessibility and user experience across all devices. The site emphasizes trust and professionalism through intuitive navigation and smooth animations.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "Express.js",
      "Nodemailer",
    ],
    gitUrl: "https://github.com/ThalitadosReis/physio-website",
    previewUrl: "https://physioplus-website.vercel.app/",
  },
  {
    title: "Brewtopia Café",
    image:
      "https://res.cloudinary.com/douen1dwv/image/upload/v1762963164/default/Brewtopia_Caf__knomq6.jpg",
    description:
      "Brewtopia is a modern, responsive café website designed to showcase artisanal coffee culture. Features an elegant hero carousel, interactive menu display, customer testimonials, and seamless contact integration. Built with React and styled with Tailwind CSS for optimal user experience across all devices. The site emphasizes visual storytelling through high-quality imagery and smooth animations.",
    technologies: ["React.js", "Tailwind CSS", "JavaScript"],
    gitUrl: "https://github.com/ThalitadosReis/cafe-website",
    previewUrl: "https://brewtopiacafe.netlify.app/",
  },
];

const projectsData = baseProjects.map((project, index) => ({
  id: index + 1,
  ...project,
}));

export default projectsData;
