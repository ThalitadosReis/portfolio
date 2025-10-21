import Contact from "./components/layout/Contact.jsx";
import Banner from "./components/Banner.jsx";
import Nav from "./components/layout/Nav.jsx";
import About from "./components/About.jsx";
import Project from "./components/Project.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <Banner />
      <About />
      <Project />
      <Contact />
    </>
  );
}
