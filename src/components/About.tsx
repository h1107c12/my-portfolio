// src/components/About.tsx
export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-black"
    >
      <div className="max-w-6xl mx-auto">
        {/* 섹션 타이틀 */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400 neon-text mb-3">
            About Me
          </h2>
          <div className="w-20 h-[2px] bg-cyan-400/60 mx-auto" />
        </div>

        {/* 자기소개 문단 */}
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-7 text-center text-sm md:text-base leading-relaxed">
          <p>
            안녕하세요.
            영상 편집과 모션 그래픽으로
            콘텐츠의 흐름을 설계하는 제작자입니다.
          </p>
          <p className="text-gray-300">
            숏폼부터 브랜드 영상까지,
            트렌드와 스토리를 결합해
            시청자의 시선을 사로잡는 영상을 만듭니다.
          </p>
        </div>

        {/* Main Tools 박스 */}
        <div className="mt-12 bg-[#050b10] border border-cyan-500/20 rounded-xl px-6 py-8 md:px-10 md:py-10">
          <h3 className="text-center text-cyan-400 mb-6 text-base md:text-lg">
            Main Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {["Premiere Pro", "After Effects", "Photoshop", "CapCut"].map(
              (tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 md:px-5 md:py-2.5 rounded-full border border-cyan-400/40 bg-cyan-400/5 text-cyan-300 text-sm"
                >
                  {tool}
                </span>
              ),
            )}
          </div>
        </div>

        {/* 하단 3카드 */}
        <div className="mt-10 grid gap-5 md:gap-6 md:grid-cols-3">
          <div className="bg-[#050b10] border border-cyan-500/15 rounded-xl px-6 py-6 text-center">
            <h4 className="text-cyan-300 mb-2">하이라이트 영상</h4>
            <p className="text-xs md:text-sm text-gray-300">시선을 사로잡는 컷 구성과 속도감 있는 편집</p>
          </div>

          <div className="bg-[#050b10] border border-cyan-500/15 rounded-xl px-6 py-6 text-center">
            <h4 className="text-cyan-300 mb-2">쇼츠 / 릴스</h4>
            <p className="text-xs md:text-sm text-gray-300">빠르게 소비되는 콘텐츠에 최적화된 편집</p>
          </div>

          <div className="bg-[#050b10] border border-cyan-500/15 rounded-xl px-6 py-6 text-center">
            <h4 className="text-cyan-300 mb-2">모션 그래픽</h4>
            <p className="text-xs md:text-sm text-gray-300">영상에 몰입감을 더하는 움직임 디자인</p>
          </div>
        </div>
      </div>
    </section>
  );
}
