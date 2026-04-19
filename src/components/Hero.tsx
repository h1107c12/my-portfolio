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
          Content Creator &amp; Video Editor
        </span>
      </div>


      <h1 className="text-5xl md:text-7xl font-extrabold neon-text text-cyan-300 leading-tight">
        Heon
      </h1>

      <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
        영상 제작을 기반으로 브랜드와 콘텐츠를 만드는 크리에이터
      </p>

      <div className="mt-10 flex gap-4">
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
