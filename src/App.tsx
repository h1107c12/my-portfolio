import Header from "./components/Header";
import Hero from "./components/Hero";
import PR from "./components/PR";
import About from "./components/About";
import Experience from "./components/Experience";
import AE from "./components/AE";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PS from "./components/PS";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      <main>
        <Hero />
        <About />
        <PR />
        <AE />
        <PS />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
