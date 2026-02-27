export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-10"
    >

      <div className="mb-10">
        <span
          className="inline-flex items-center rounded-full border border-cyan-400/60
                    bg-cyan-500/10 px-6 py-2 text-sm font-medium text-cyan-300
                    badge-neon tracking-wide"
        >
          Creative Video Editor &amp; Motion Designer
        </span>
      </div>


      <h1 className="text-5xl md:text-7xl font-extrabold neon-text text-cyan-300 leading-tight">
        Heon
      </h1>

      <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
        트렌디한 편집과 감각적인 창작
      </p>

      <div className="mt-10 flex gap-4">
        <a
          href="#reel"
          className="px-6 py-3 bg-cyan-500 text-black font-bold rounded-md flex items-center gap-2 hover:bg-cyan-400 transition"
        >
          <span className="text-lg">▶</span>
          Watch My Reel
        </a>


        <a
          href="#contact"
          className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-md hover:bg-cyan-400 hover:text-black transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
