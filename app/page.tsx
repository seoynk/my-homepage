function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <span className="blob -left-24 -top-24 h-72 w-72 bg-[#8ec5ff] opacity-60 sm:h-96 sm:w-96" />
      <span
        className="blob -right-20 top-6 h-72 w-72 bg-[#d9b3ff] opacity-60 sm:h-[26rem] sm:w-[26rem]"
        style={{ animationDelay: "-6s" }}
      />
      <span
        className="blob left-1/3 top-1/2 h-64 w-64 bg-[#ffd0e6] opacity-50 sm:h-80 sm:w-80"
        style={{ animationDelay: "-13s" }}
      />
      <span
        className="blob -bottom-16 left-0 h-64 w-64 bg-[#b6ffe3] opacity-50 sm:h-80 sm:w-80"
        style={{ animationDelay: "-19s" }}
      />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Background />
      <main className="relative z-10 flex min-h-screen items-center justify-center px-5">
        <div className="glass-strong rise w-full max-w-2xl rounded-[2rem] px-6 py-14 text-center sm:px-12 sm:py-16">
          <h1 className="text-[clamp(2.75rem,12vw,5rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
            Sunnie Kim
          </h1>
          <p
            className="grad-text mt-4 text-[clamp(1.1rem,4.5vw,1.75rem)] font-semibold tracking-[-0.02em]"
            style={{ animationDelay: "120ms" }}
          >
            만들며 배우는 학생입니다.
          </p>
        </div>
      </main>
    </>
  );
}
