const testimonials = [
  {
    id: 1,
    text: "You have ensured a systematic approach to our email strategy and helped us streamline all chaotic thoughts and ideas we had about our emails!",
    name: "Natalia Pereldik,",
    role: "CEO, Funexpected Games",
  },
  {
    id: 2,
    text: "You have shown great professionalism and attention to detail when it comes to email marketing!",
    name: "Ron Shalev",
    role: "Founder, BYB Media",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-[#f3f3f3] py-20 md:py-24">
      <div className="mx-auto max-w-350 px-6">
        <div className="grid gap-10 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
          {/* LEFT */}
          <div>
            <h2 className="mb-10 text-5xl font-black uppercase leading-[1.02] text-[#1f1f21] md:text-6xl xl:text-7xl">
              Testimonials
            </h2>

            <div className="space-y-8">
              {testimonials.map((item) => (
                <article
                  key={item.id}
                  className="max-w-140 rounded-[14px] border border-black/8 bg-white px-7 py-6 shadow-[0_8px_24px_rgba(0,0,0,0.10)]"
                >
                  <div className="mb-5 text-6xl font-black leading-none text-[#ff3b3f]">
                    ”
                  </div>

                  <p className="mb-5 max-w-117.5 text-[18px] leading-8 text-black/80">
                    {item.text}
                  </p>

                  <div>
                    <h3 className="text-[18px] font-semibold italic text-[#ff3b3f]">
                      {item.name}
                    </h3>
                    <p className="text-[17px] font-semibold italic text-black/80">
                      {item.role}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="relative min-h-105 xl:min-h-140">
            <div className="absolute left-0 top-0 z-10 h-42.5 w-[88%] bg-[#ff3341] [clip-path:polygon(0_0,100%_0,72%_100%,12%_100%)] md:h-55" />

            <div className="relative z-20 ml-auto mt-10 w-[88%] overflow-hidden bg-white xl:mt-14">
              <img
                src="/images/testimonials-main.png"
                alt=""
                className="h-105 w-full object-cover grayscale xl:h-140"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
