const helpItems = [
  "Your email revenue is 20% or less",
  "You need ideas to grow your email channel",
  "You want expert help with implementing strategies",
  "Your competitors’ emails outperform yours",
  "Email deliverability became a problem",
];

const HelpSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#f3f3f3] py-20 md:py-24">
      <div className="absolute inset-0 opacity-60">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[18px_18px]" />
      </div>

      <div className="relative mx-auto max-w-350 px-6">
        <div className="rounded-xl bg-[#1f1f21] px-12 py-16 shadow-[0_10px_30px_rgba(0,0,0,0.12)] md:px-12 md:py-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <h2 className="max-w-155 text-5xl font-black uppercase leading-[1.02] text-white md:text-6xl xl:text-7xl">
                We are here
                <br />
                to <span className="text-[#ff3b3f]">help</span> when:
              </h2>
            </div>

            <ul className="space-y-5">
              {helpItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-base leading-7 text-white md:text-[18px]"
                >
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#ff3b3f]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
