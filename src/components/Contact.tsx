const IconBtn = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    aria-label={label}
    className="flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/5 text-cyan-300 transition hover:border-cyan-400/45 hover:bg-cyan-400/10 neon-border-soft"
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noreferrer" : undefined}
  >
    {children}
  </a>
);

export default function Contact() {
  return (
    <section id="contact" className="mt-24 pt-40 pb-32">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="mb-3 text-sm text-cyan-400 neon-text">
          Let&apos;s Create Together
        </p>

        {/* icons */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <IconBtn href="mailto:h1107c12@gmail.com" label="Email">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
              <path
                d="M4.5 7.5h15v9a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-9Z"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="m5.2 8.1 6.3 5a1 1 0 0 0 1.2 0l6.1-5"
                stroke="currentColor"
                strokeWidth="1.6"
                opacity=".9"
              />
            </svg>
          </IconBtn>

          <IconBtn href="https://www.instagram.com/jae_ddeok/" label="Instagram">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
              <path
                d="M7.5 3.8h9A3.7 3.7 0 0 1 20.2 7.5v9a3.7 3.7 0 0 1-3.7 3.7h-9A3.7 3.7 0 0 1 3.8 16.5v-9A3.7 3.7 0 0 1 7.5 3.8Z"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <circle cx="17" cy="7" r="1" fill="currentColor" />
            </svg>
          </IconBtn>
        </div>

        {/* CTA button */}
        <div className="mt-14">
          <a
            href="mailto:h1107c12@gmail.com"
            className="inline-flex items-center gap-3 rounded-2xl bg-cyan-400 px-12 py-5 font-semibold text-black transition hover:bg-cyan-300 shadow-[0_12px_45px_rgba(34,211,238,0.28)]"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
              <path
                d="M4.5 7.5h15v9a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-9Z"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="m5.2 8.1 6.3 5a1 1 0 0 0 1.2 0l6.1-5"
                stroke="currentColor"
                strokeWidth="1.8"
                opacity=".9"
              />
            </svg>
            문의하기
          </a>
        </div>
      </div>
    </section>
  );
}