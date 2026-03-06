export default function Projects() {
  const projectList = [
    {
      title: "VEX 프로게임단 공식 창단",
      desc: "구단 홍보 영상",
      tags: ["메인편집/ 서브편집"],
      time: "0:48",
      youtubeId: "mAxPqc8X3Gk",
    },
    {
      title: "VEX 클랜컵",
      desc: "구단 클랜 홍보",
      tags: ["메인편집 / 서브편집"],
      time: "2:56",
      youtubeId: "lvD-m5AiY0s",
    },
    {
      title: "Motion Graphics Intro",
      desc: "After Effects 모션 그래픽 제작",
      tags: ["모션 그래픽"],
      time: "0:45",
      youtubeId: "lvD-m5AiY0s",
    },
    {
      title: "YouTube Shorts Series",
      desc: "쇼츠 영상 시리즈 편집 및 썸네일",
      tags: ["편집 / 썸네일 디자인"],
      time: "0:59",
      youtubeId: "lvD-m5AiY0s",
    },
    {
      title: "Product Launch Video",
      desc: "제품 출시 홍보 영상 편집 및 시각효과",
      tags: ["편집 / VFX"],
      time: "1:30",
      youtubeId: "lvD-m5AiY0s",
    },
    {
      title: "Documentary Highlight",
      desc: "다큐멘터리 하이라이트 영상 편집",
      tags: ["편집 / 스토리텔링"],
      time: "3:45",
      youtubeId: "lvD-m5AiY0s",
    },
  ];

  return (
    <section id="projects" className="py-32 text-center max-w-7xl mx-auto px-6">
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 neon-text mb-3">
        Featured Projects
      </h2>
      <p className="text-gray-300 mb-12">최근 작업한 영상 프로젝트들</p>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 gap-10">
        {projectList.map((p, i) => (
          <div
            key={i}
            className="bg-black/30 border border-cyan-400/20 rounded-xl overflow-hidden 
                       shadow-lg hover:shadow-cyan-400/40 transition duration-300"
          >
            {/* 썸네일 영역 */}
            <div className="relative overflow-hidden group h-44 bg-black">

              {/* 유튜브 썸네일 */}
              <img
                src={`https://img.youtube.com/vi/${p.youtubeId}/maxresdefault.jpg`}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 
                           group-hover:scale-[1.08]"
              />

              {/* Hover 어둡게 */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300" />

              {/* Play Button */}
              <div
                className="
                  absolute inset-0 flex items-center justify-center
                  opacity-0 group-hover:opacity-100
                  transition-all duration-300 ease-out
                "
              >
                <div
                  className="w-14 h-14 rounded-full bg-cyan-400/90
                            shadow-[0_0_18px_rgba(34,211,238,0.85)]
                            flex items-center justify-center"
                >
                  <svg
                    viewBox="0 0 100 100"
                    className="w-7 h-7 translate-x-[3px]"
                  >
                    <polygon
                      points="32,25 32,75 72,50"
                      fill="black"
                      stroke="black"
                      strokeWidth="10"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* 텍스트 영역 */}
            <div className="p-6 text-left">
              <h3 className="text-xl font-bold text-cyan-300 neon-text mb-1">
                {p.title}
              </h3>

              {/* 태그 */}
              <div className="flex flex-wrap gap-2 mb-3">
                {p.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 
                               text-cyan-300 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}

                {/* Time */}
                <span
                  className="px-3 py-1 bg-gray-800/40 text-gray-300 text-xs rounded-full flex items-center gap-1"
                >
                  ⏱ {p.time}
                </span>
              </div>

              {/* 설명 */}
              <p className="text-gray-300 mt-1 text-sm">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}