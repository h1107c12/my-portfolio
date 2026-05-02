export default function Skills() {
  const skills = [
    {
      title: "Premiere Pro",
      desc: "컷 편집, 자막, 사운드 및 효과를 활용한 영상 제작",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
          <path
            d="M4 6.5c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v11c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-11Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M8 4.5v15M16 4.5v15"
            stroke="currentColor"
            strokeWidth="1.6"
            opacity=".55"
          />
          <path
            d="M4 9h4M4 12h4M4 15h4M16 9h4M16 12h4M16 15h4"
            stroke="currentColor"
            strokeWidth="1.6"
            opacity=".55"
          />
        </svg>
      ),
    },
    {
      title: "After Effects",
      desc: "간단한 모션 그래픽, 타이틀 애니메이션 제작",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
          <path
            d="M12 3 3.5 7.5 12 12l8.5-4.5L12 3Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M3.5 12 12 16.5 20.5 12"
            stroke="currentColor"
            strokeWidth="1.6"
            opacity=".7"
          />
          <path
            d="M3.5 16.5 12 21l8.5-4.5"
            stroke="currentColor"
            strokeWidth="1.6"
            opacity=".45"
          />
        </svg>
      ),
    },
    {
      title: "AI",
      desc: "생성형 비디오 및 이미지를 효율적 활용",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
          <path
            d="M12 3a9 9 0 1 0 0 18h1.2c1.5 0 2.3-1.2 1.7-2.5-.4-.9-.2-1.9.7-2.4.7-.4 1.5-.2 2.1.2A9 9 0 0 0 12 3Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle cx="8.5" cy="10" r="1" fill="currentColor" />
          <circle cx="12" cy="8.2" r="1" fill="currentColor" opacity=".85" />
          <circle cx="15.5" cy="10" r="1" fill="currentColor" opacity=".7" />
          <circle cx="10" cy="13.7" r="1" fill="currentColor" opacity=".6" />
        </svg>
      ),
    },
    {
      title: "CapCut",
      desc: "트렌디한 숏폼 & 릴스 작업",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
          <path
            d="M10 18a2.5 2.5 0 1 1-2.5-2.5H10V18Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M10 15V5l10-2v10"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M20 16.5a2.5 2.5 0 1 1-2.5-2.5H20v2.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      ),
    },
    {
      title: "Photoshop",
      desc: "썸네일 디자인, 기본적인 그래픽 편집",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
          <path
            d="M9 8.5A2.5 2.5 0 1 1 6.5 6 2.5 2.5 0 0 1 9 8.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M9 15.5A2.5 2.5 0 1 1 6.5 13 2.5 2.5 0 0 1 9 15.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M8.6 9.9 20 3M8.6 14.1 20 21"
            stroke="currentColor"
            strokeWidth="1.6"
            opacity=".8"
          />
        </svg>
      ),
    },
    {
      title: "Creative Editing",
      desc: "트렌디한 편집 스타일, 쇼츠/릴스 특화 편집",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
          <path
            d="M12 3l1.2 4.2L17.4 9 13.2 10.2 12 14.4l-1.2-4.2L6.6 9l4.2-1.8L12 3Z"
            fill="currentColor"
            opacity=".9"
          />
          <path
            d="M18.2 12.2l.6 2.1 2.1.6-2.1.6-.6 2.1-.6-2.1-2.1-.6 2.1-.6.6-2.1Z"
            fill="currentColor"
            opacity=".75"
          />
          <path
            d="M5.8 13.2l.5 1.7 1.7.5-1.7.5-.5 1.7-.5-1.7-1.7-.5 1.7-.5.5-1.7Z"
            fill="currentColor"
            opacity=".65"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="skills" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* ✅ Skills Header: Showreel 스타일 */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400 neon-text mb-3">
            Skills & Tools
          </h2>
          <div className="mx-auto h-[2px] w-20 bg-cyan-400/70 neon-line mb-6" />
          <p className="text-gray-300">전문 기술 및 사용 툴</p>
        </div>

        {/* grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((s) => (
            <div key={s.title} className="group neon-card rounded-2xl px-8 py-10">
              <div className="mb-6">
                <div className="neon-icon w-14 h-14 rounded-xl border border-cyan-400/30 bg-cyan-400/5 flex items-center justify-center text-cyan-300 neon-border-soft">
                  {s.icon}
                </div>
              </div>

              <h3 className="text-cyan-300 text-lg font-semibold mb-3">
                {s.title}
              </h3>
              <p className="text-gray-300/90 leading-relaxed text-sm">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
