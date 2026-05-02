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
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.06),transparent_30%)]" />

      <div className="relative z-10">
        <Header />

        <main>
          <Hero />
          <About />
          <Skills />
          <PR />
          <AE />
          <PS />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}