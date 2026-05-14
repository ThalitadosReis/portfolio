import { LangProvider } from "./i18n/LangContext.jsx";
import { useCustomCursor } from "./hooks/useCustomCursor.js";

import Navbar from "./components/Navbar.jsx";
import Banner from "./components/home/Banner.jsx";
import Project from "./components/home/Project.jsx";
import About from "./components/home/About.jsx";
import Contact from "./components/home/Contact.jsx";
import Footer from "./components/Footer.jsx";

function AppInner() {
  useCustomCursor();
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <Project />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LangProvider>
      <AppInner />
    </LangProvider>
  );
}
