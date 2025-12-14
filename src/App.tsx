import Header from "./components/Header";
import Hero from "./components/Hero";
import Showreel from "./components/Showreel";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      <main>
        <Hero />
        <About />
        <Showreel />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
