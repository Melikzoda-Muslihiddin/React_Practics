const Hero = ({ onScrollToContact }) => {
  return (
    <section
      style={{
        backgroundImage: `url('/images/hero.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="overflow-hidden px-6 py-20 text-white lg:h-screen md:py-24"
    >
      <div className="mx-auto max-w-350">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-white/55">
              Digital marketing
            </p>

            <h1 className="mb-6 text-black max-w-180 text-5xl font-black uppercase leading-[1.02] md:text-6xl xl:text-7xl">
              <span className="text-[#ff3b3f]">Boost</span> your email marketing results!
            </h1>

            <p className="mb-8 max-w-155 text-lg leading-8 text-black">
              We create modern growth systems with strategy, automation and
              clean design to help your business scale with confidence.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={onScrollToContact}
                className="rounded-sm bg-[#ff3b3f] px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:opacity-90"
              >
                Get started
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-12 top-10 h-40 w-40 rounded-full bg-[#ff3b3f]/20 blur-3xl" />
            <div className="absolute -right-8 bottom-8 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
