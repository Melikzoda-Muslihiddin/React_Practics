const careItems = [
  "Planning",
  "Design",
  "Copywriting",
  "Analytics",
  "Deliverability",
  "Automation",
];

const CareSection = () => {
  return (
    <section
      id="results"
      className="relative overflow-hidden bg-[#f3f3f3] py-20 md:py-24"
    >
      <div className="absolute inset-y-0 left-0 w-60 opacity-60 md:w-[320px]">
        <div className="h-full w-full bg-[repeating-radial-gradient(circle_at_left_center,rgba(0,0,0,0.05)_0px,rgba(0,0,0,0.05)_2px,transparent_2px,transparent_14px)]" />
      </div>

      <div className="relative mx-auto max-w-350 px-6">
        <div className="rounded-xl bg-[#1f1f21] px-10 py-12 text-white shadow-[0_12px_35px_rgba(0,0,0,0.14)] md:px-12 md:py-14 xl:px-14">
          <div className="grid gap-10 xl:grid-cols-[1.25fr_0.75fr]">
            <div>
              <h2 className="max-w-205 text-5xl font-black uppercase leading-[1.02] md:text-6xl xl:text-7xl">
                We <span className="text-[#ff3b3f]">take care</span>
                <br />
                of all your email
                <br />
                marketing activities
              </h2>

              <div className="mt-10 grid gap-8 md:grid-cols-[1fr_auto_1fr] md:items-start">
                <div>
                  <p className="text-[18px] leading-8 text-white/90">
                    <span className="font-semibold text-[#ff3b3f]">
                      For midsize businesses,
                    </span>{" "}
                    we become your budget-friendly email marketing team,
                    ensuring revenue from emails at a fraction of in-house
                    costs. Discover how it works!
                  </p>
                </div>

                <div className="hidden h-full w-px bg-white/60 md:block" />

                <div>
                  <p className="text-[18px] leading-8 text-white/90">
                    <span className="font-semibold text-[#ff3b3f]">
                      For email marketers at larger companies,
                    </span>{" "}
                    we enhance your productivity by handling execution, allowing
                    you to focus on strategy. Learn why we are your support, not
                    your competition!
                  </p>
                </div>
              </div>
            </div>

            <div className="xl:pt-4">
              <ul className="space-y-5">
                {careItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-lg leading-7 text-white"
                  >
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#ff3b3f]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareSection;
