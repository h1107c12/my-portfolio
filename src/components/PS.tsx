import { useState } from "react";

type PSItem = {
  title: string;
  desc: string;
  tags: string[];
  image: string;
};

export default function PS() {
  const psList: PSItem[] = [
    {
      title: "게임 포스터 디자인",
      desc: "e스포츠 홍보 포스터",
      tags: ["포토샵", "합성", "디자인"],
      image: "/images/ps1.jpg",
    },
    {
      title: "유튜브 썸네일",
      desc: "클릭 유도형 썸네일 제작",
      tags: ["썸네일", "브랜딩"],
      image: "/images/ps2.jpg",
    },
    {
      title: "배너 디자인",
      desc: "SNS 광고 배너",
      tags: ["광고", "배너"],
      image: "/images/ps3.jpg",
    },
  ];

  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="ps" className="py-32 text-center max-w-7xl mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 neon-text mb-3">
        Adobe Photoshop
      </h2>
      <p className="text-gray-300 mb-12">
        포토샵을 활용한 디자인 작업물
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        {psList.map((item, i) => (
          <div
            key={i}
            onClick={() => setSelected(item.image)}
            className="cursor-pointer bg-black/30 border border-cyan-400/20 rounded-xl overflow-hidden 
                       shadow-lg hover:shadow-cyan-400/40 transition duration-300 group"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover 
                           transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition" />
            </div>

            <div className="p-5 text-left">
              <h3 className="text-xl font-bold text-cyan-300 neon-text mb-2">
                {item.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-2">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 
                               text-cyan-300 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 이미지 확대 모달 */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            className="max-w-[90%] max-h-[90%] rounded-xl"
          />
        </div>
      )}
    </section>
  );
}