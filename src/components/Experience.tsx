export default function Experience() {
  const career = [
    {
      company: "VEX E-SPORTS",
      role: "미디어 콘텐츠총괄",
      period: "2025.09 - 현재",
      desc: "브랜드 캠페인 영상 편집 및 모션 그래픽 제작, 클라이언트와의 협업을 통한 콘텐츠 제작",
    },
  ];

  const extra = [
    {
      title: "세븐틴코인노래연습장",
      role: "홀서빙 · 매장관리",
      period: "2023.03 - 2025.09",
      desc: "고객 서비스 및 매장 관리, 전자기기 유지보수, 재고 관리",
    },
    {
      title: "쿠우쿠우",
      role: "홀 서빙 · 음식 조리 · 주방 보조",
      period: "2022.12 - 2023.02",
      desc: "홀 서빙 및 주방 업무, 매장 관리",
    },
    {
      title: "GS 물류센터",
      role: "일용직",
      period: "1일",
      desc: "상품 분류 및 배송 준비 작업, 재고 정리",
    },
    {
      title: "원소주 포장 및 상하차",
      role: "일용직",
      period: "1일",
      desc: "상품 포장 및 배송 준비 작업, 재고 정리",
    },
  ];

  return (
    <section id="experience" className="py-32 px-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-cyan-400 neon-text">
          Work Experience
        </h2>
        <p className="text-gray-300 mt-3">경력 및 작업 이력</p>

        <h3 className="mt-16 text-2xl md:text-3xl font-bold text-cyan-300 neon-text">
          Professional Experience
        </h3>
        <p className="text-gray-300 mt-2">
          영상 편집 및 콘텐츠 제작 관련 경력
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-6xl mx-auto mt-14">
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-3xl">
            {/* vertical line */}
            <div
              className="absolute left-9 top-6 w-px bg-cyan-400/40 shadow-[0_0_18px_rgba(34,211,238,0.25)]"
              style={{
                height: `calc(100% - 100px)`,
              }}
            />

            <div className="space-y-14">
              {career.map((item, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[72px_1fr] gap-8 items-start"
                >
                  {/* Icon */}
                  <div className="relative flex justify-center">
                    <div
                      className="
                        relative z-10
                        w-12 h-12 rounded-full
                        border border-cyan-400/80
                        bg-black/80
                        flex items-center justify-center
                        shadow-[0_0_18px_rgba(34,211,238,0.45)]
                      "
                    >
                      {/* Bag icon */}
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-cyan-300"
                      >
                        <path
                          d="M9 7.5V6.8C9 5.25 10.25 4 11.8 4H12.2C13.75 4 15 5.25 15 6.8V7.5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                        <path
                          d="M6.5 8.5H17.5C18.6 8.5 19.5 9.4 19.5 10.5V18C19.5 19.1 18.6 20 17.5 20H6.5C5.4 20 4.5 19.1 4.5 18V10.5C4.5 9.4 5.4 8.5 6.5 8.5Z"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9 12V13.2M15 12V13.2"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-left">
                    <h4 className="text-2xl font-extrabold text-white">
                      {item.company}
                    </h4>

                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
                      <span className="text-cyan-300 font-semibold">
                        {item.role}
                      </span>
                      <span className="text-gray-400 text-sm">{item.period}</span>
                    </div>

                    <p className="mt-3 text-gray-200 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* bottom fade */}
            <div className="pointer-events-none absolute -bottom-10 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-black" />
          </div>
        </div>

        {/* Additional Experience Header */}
        <div className="max-w-6xl mx-auto text-center mt-28">
          <h3 className="text-2xl md:text-3xl font-bold text-cyan-300 neon-text">
            Additional Experience
          </h3>
          <p className="text-gray-300 mt-2">
            다양한 분야에서의 근무 경험
          </p>
        </div>

        {/* Additional Experience Cards */}
        <div className="max-w-6xl mx-auto mt-10 grid gap-6 md:grid-cols-2">
          {extra.map((item, i) => (
            <div
              key={i}
              className="
                group
                bg-black/25 border border-white/10
                rounded-2xl p-8
                shadow-[0_0_20px_rgba(0,0,0,0.55)]
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:scale-[1.01]
                hover:border-cyan-400/40
                hover:shadow-[0_0_0_1px_rgba(34,211,238,0.18),0_0_28px_rgba(34,211,238,0.18)]
              "
            >

              <div className="flex items-start justify-between gap-6">
                <div>
                  <h4 className="text-white font-bold text-xl">{item.title}</h4>
                  <div className="text-cyan-300 text-sm font-semibold mt-1">
                    {item.role}
                  </div>
                </div>

                {/* 날짜: 이모지 대신 캘린더 아이콘 + 텍스트 (첫번째 이미지 스타일) */}
                <div className="flex items-center gap-3 text-gray-200 text-sm whitespace-nowrap">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-80"
                  >
                    <path
                      d="M7 3V6M17 3V6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M4.5 9H19.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6.5 5.5H17.5C18.6 5.5 19.5 6.4 19.5 7.5V18C19.5 19.1 18.6 20 17.5 20H6.5C5.4 20 4.5 19.1 4.5 18V7.5C4.5 6.4 5.4 5.5 6.5 5.5Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{item.period}</span>
                </div>
              </div>

              <p className="text-gray-200/90 text-sm leading-relaxed mt-4">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
