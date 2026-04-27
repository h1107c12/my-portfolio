import { useState } from "react";

type PSImage = {
  title: string;
  image: string;
};

type PSProject = {
  title: string;
  desc: string;
  tags: string[];
  cover: string;
  images: PSImage[];
};

export default function PS() {
  const psProjects: PSProject[] = [
  {
    title: "스폰서 포스터",
    desc: "e스포츠 스폰서 체결 홍보 포스터",
    tags: ["포스터", "디자인"],
    cover: "/images/ps/poster/cover.png",
    images: Array.from({ length: 10 }, (_, i) => ({
      title: `포스터 작업 ${String(i + 1).padStart(2, "0")}`,
      image: `/images/ps/poster/ps${i + 1}.png`,
    })),
  },
  {
    title: "유튜브 썸네일",
    desc: "클릭 유도형 콘텐츠 썸네일 디자인",
    tags: ["썸네일", "콘텐츠"],
    cover: "/images/ps/thumbnail/cover.png",
    images: Array.from({ length: 3 }, (_, i) => ({
      title: `썸네일 작업 ${String(i + 1).padStart(2, "0")}`,
      image: `/images/ps/thumbnail/ps${i + 1}.png`,
    })),
  },
  {
    title: "유니폼 디자인",
    desc: "e스포츠 팀 유니폼 그래픽 디자인",
    tags: ["브랜딩", "디자인"],
    cover: "/images/ps/uniform/cover.png",
    images: Array.from({ length: 4 }, (_, i) => ({
      title: `유니폼 작업 ${String(i + 1).padStart(2, "0")}`,
      image: `/images/ps/uniform/ps${i + 1}.png`,
    })),
  },
  {
    title: "SNS 마케팅 포스터",
    desc: "SNS 마케팅용 배너 및 포스터 디자인",
    tags: ["광고", "SNS"],
    cover: "/images/ps/banner/cover.png",
    images: Array.from({ length: 7 }, (_, i) => ({
      title: `마케팅 작업 ${String(i + 1).padStart(2, "0")}`,
      image: `/images/ps/banner/ps${i + 1}.png`,
    })),
  },
  {
    title: "타이포그래피 포스터",
    desc: "텍스트 중심의 타이포그래피 디자인",
    tags: ["타이포그래피", "디자인"],
    cover: "/images/ps/typo/cover.png",
    images: Array.from({ length: 5 }, (_, i) => ({
      title: `타이포 작업 ${String(i + 1).padStart(2, "0")}`,
      image: `/images/ps/typo/ps${i + 1}.png`,
    })),
  },
  {
    title: "로고 기반 비주얼 포스터",
    desc: "기존 로고를 활용해 그래픽 요소를 확장한 SNS 포스터 디자인",
    tags: ["SNS", "브랜딩", "비주얼"],
    cover: "/images/ps/logo/cover.png",
    images: Array.from({ length: 2 }, (_, i) => ({
      title: `로고 기반 비주얼 작업 ${String(i + 1).padStart(2, "0")}`,
      image: `/images/ps/logo/ps${i + 1}.png`,
    })),
  },
];

  const [selectedProject, setSelectedProject] = useState<PSProject | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="ps" className="py-32 text-center max-w-7xl mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 neon-text mb-3">
        Adobe Photoshop
      </h2>

      <p className="text-gray-300 mb-12">
        포토샵을 활용한 디자인 작업물
      </p>

      {!selectedProject ? (
        <div className="grid md:grid-cols-3 gap-10">
          {psProjects.map((project, i) => (
            <div
              key={i}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer bg-black/30 border border-cyan-400/20 rounded-xl overflow-hidden
                         shadow-lg hover:shadow-cyan-400/40 transition duration-300 group"
            >
              <div className="relative aspect-video overflow-hidden bg-black">
  <img
    src={project.cover}
    alt={project.title}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
  />
</div>

              <div className="p-5 text-left">
                <h3 className="text-xl font-bold text-cyan-300 neon-text mb-2">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/20
                                 text-cyan-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-300 text-sm">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between mb-10">
            <button
              onClick={() => setSelectedProject(null)}
              className="px-4 py-2 rounded-full border border-cyan-400/30 text-cyan-300
                         hover:bg-cyan-400/10 transition"
            >
              ← 폴더 목록
            </button>

            <h3 className="text-2xl font-bold text-cyan-300 neon-text">
              {selectedProject.title}
            </h3>

            <div className="w-[92px]" />
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {selectedProject.images.map((item, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(item.image)}
                className="cursor-pointer bg-black/30 border border-cyan-400/20 rounded-xl overflow-hidden
                           shadow-lg hover:shadow-cyan-400/40 transition duration-300 group"
              >
                <div className="relative aspect-video overflow-hidden bg-black">
  <img
    src={item.image}
    alt={item.title}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
  />
</div>

                <div className="p-4 text-left">
                  <h4 className="text-cyan-300 font-bold">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="포토샵 작업물"
            className="max-w-[90%] max-h-[90%] rounded-xl"
          />
        </div>
      )}
    </section>
  );
}