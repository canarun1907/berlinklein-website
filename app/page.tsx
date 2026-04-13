import Image from "next/image"

function Bird({ style }: { style: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 80 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      className="absolute opacity-20 pointer-events-none"
    >
      {/* Wings */}
      <path d="M10 30 Q25 10 40 28 Q55 10 70 30" stroke="#f0f0f0" strokeWidth="1.2" fill="none" />
      {/* Body */}
      <path d="M38 28 Q42 35 46 33 Q44 40 38 38 Q32 40 30 33 Q34 35 38 28Z" stroke="#f0f0f0" strokeWidth="0.8" fill="none" />
      {/* Red dot — eye */}
      <circle cx="44" cy="31" r="2.5" fill="#dc2626" />
      {/* Tail */}
      <path d="M32 37 Q28 45 24 42" stroke="#f0f0f0" strokeWidth="0.8" fill="none" />
    </svg>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0c0c] text-[#f0f0f0] overflow-x-hidden">
      {/* Floating birds */}
      <style>{`
        @keyframes flyRight {
          0%   { transform: translateX(-120px) translateY(0px) scale(0.8); opacity: 0; }
          10%  { opacity: 0.2; }
          90%  { opacity: 0.15; }
          100% { transform: translateX(calc(100vw + 120px)) translateY(-40px) scale(1); opacity: 0; }
        }
        @keyframes flyLeft {
          0%   { transform: translateX(120px) translateY(0px) scaleX(-1) scale(0.9); opacity: 0; }
          10%  { opacity: 0.18; }
          90%  { opacity: 0.12; }
          100% { transform: translateX(calc(-100vw - 120px)) translateY(30px) scaleX(-1) scale(0.7); opacity: 0; }
        }
        .bird-r { animation: flyRight linear infinite; }
        .bird-l { animation: flyLeft linear infinite; }
      `}</style>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <Bird style={{ width: 80,  top: "15%", left: 0,    animation: "flyRight 18s linear 0s infinite"  }} />
        <Bird style={{ width: 56,  top: "35%", left: "100vw", animation: "flyLeft 22s linear 4s infinite"   }} />
        <Bird style={{ width: 64,  top: "60%", left: 0,    animation: "flyRight 26s linear 9s infinite"  }} />
        <Bird style={{ width: 48,  top: "75%", left: "100vw", animation: "flyLeft 20s linear 14s infinite"  }} />
        <Bird style={{ width: 72,  top: "50%", left: 0,    animation: "flyRight 30s linear 7s infinite"  }} />
      </div>

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#f0f0f0 1px, transparent 1px), linear-gradient(90deg, #f0f0f0 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 flex flex-col items-center gap-10">
          <div className="relative h-40 w-[480px] max-w-[90vw]">
            <Image src="/logo.png" alt="Berlin Klein" fill className="object-contain" priority />
          </div>
          <div className="h-px w-20 bg-[#dc2626]" />
          <p className="max-w-md text-[13px] uppercase tracking-[0.25em] text-[#f0f0f0]/50">
            Refined. Intimate. Uncompromising.
          </p>
          <a
            href="#about"
            className="mt-2 inline-flex items-center gap-2 border border-[#dc2626]/50 px-8 py-3 text-[11px] uppercase tracking-[0.2em] text-[#dc2626] transition-all duration-300 hover:bg-[#dc2626] hover:text-white"
          >
            Enter
          </a>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30">
          <div className="h-8 w-px bg-[#f0f0f0]" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#dc2626]">About</p>
          <h2 className="mb-8 text-3xl font-thin uppercase tracking-[0.3em]">Berlin Klein</h2>
          <div className="mx-auto mb-10 h-px w-12 bg-[#dc2626]/40" />
          <p className="text-[14px] leading-8 text-[#f0f0f0]/60">
            Berlin Klein is a boutique club experience in Second Life — where refined taste meets
            the underground. Small by design, intentional by nature. We do not follow trends;
            we set the mood.
          </p>
        </div>
      </section>

      {/* Music */}
      <section className="border-t border-[#f0f0f0]/5 px-6 py-28">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-center text-[10px] uppercase tracking-[0.3em] text-[#dc2626]">Music</p>
          <h2 className="mb-14 text-center text-3xl font-thin uppercase tracking-[0.3em]">Genres</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Techno", "House", "Minimal", "Industrial", "Dark Electro", "Ambient"].map((g) => (
              <span
                key={g}
                className="border border-[#f0f0f0]/10 px-6 py-2 text-[11px] uppercase tracking-[0.2em] text-[#f0f0f0]/50 transition-colors hover:border-[#dc2626]/50 hover:text-[#dc2626]"
              >
                {g}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="border-t border-[#f0f0f0]/5 px-6 py-28">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-center text-[10px] uppercase tracking-[0.3em] text-[#dc2626]">Weekly</p>
          <h2 className="mb-14 text-center text-3xl font-thin uppercase tracking-[0.3em]">Schedule</h2>

          <div className="space-y-px">
            {[
              { day: "Monday",    time: "8:00 PM SLT",  dj: "DJ Kael",     genre: "Minimal Techno" },
              { day: "Wednesday", time: "9:00 PM SLT",  dj: "DJ Vesper",   genre: "Dark Electro" },
              { day: "Thursday",  time: "7:00 PM SLT",  dj: "DJ Noir",     genre: "Ambient / Deep" },
              { day: "Friday",    time: "10:00 PM SLT", dj: "DJ Solène",   genre: "House" },
              { day: "Saturday",  time: "9:00 PM SLT",  dj: "DJ Ravn",     genre: "Industrial" },
              { day: "Sunday",    time: "6:00 PM SLT",  dj: "DJ Mireille", genre: "Melodic Techno" },
            ].map((slot) => (
              <div
                key={slot.day}
                className="group flex flex-col gap-1 border border-[#f0f0f0]/5 bg-[#f0f0f0]/[0.02] px-6 py-5 transition-colors hover:border-[#dc2626]/20 hover:bg-[#dc2626]/[0.04] sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-6">
                  <span className="w-24 text-[11px] font-medium uppercase tracking-[0.2em] text-[#dc2626]">
                    {slot.day}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.15em] text-[#f0f0f0]/30">
                    {slot.time}
                  </span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-[13px] font-light tracking-wide text-[#f0f0f0]/80">
                    {slot.dj}
                  </span>
                  <span className="hidden text-[10px] uppercase tracking-[0.2em] text-[#f0f0f0]/30 sm:block">
                    {slot.genre}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit */}
      <section className="border-t border-[#f0f0f0]/5 px-6 py-28 text-center">
        <div className="mx-auto max-w-xl">
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#dc2626]">In-World</p>
          <h2 className="mb-8 text-3xl font-thin uppercase tracking-[0.3em]">Visit Us</h2>
          <div className="mx-auto mb-10 h-px w-12 bg-[#dc2626]/40" />
          <p className="mb-10 text-[13px] uppercase tracking-[0.15em] text-[#f0f0f0]/40">
            Find us in Second Life
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 border border-[#dc2626]/50 px-10 py-4 text-[11px] uppercase tracking-[0.2em] text-[#dc2626] transition-all duration-300 hover:bg-[#dc2626] hover:text-white"
          >
            Teleport In-World
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#f0f0f0]/5 px-6 py-10 text-center">
        <div className="relative mx-auto mb-6 h-10 w-40">
          <Image src="/logo.png" alt="Berlin Klein" fill className="object-contain" />
        </div>
        <p className="text-[10px] uppercase tracking-[0.25em] text-[#f0f0f0]/20">
          © {new Date().getFullYear()} Berlin Klein — Second Life
        </p>
      </footer>

    </main>
  )
}
