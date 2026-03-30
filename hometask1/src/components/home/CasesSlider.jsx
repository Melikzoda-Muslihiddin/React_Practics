import { useMemo, useState } from "react";
import Button from "@mui/material/Button";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

const cases = [
  {
    id: 1,
    title: "Lev Haolam Campaign",
    result: "$20K per email campaign",
    type: "Subscription e-commerce",
    company: "Lev Haolam",
    product: "Handmade gifts from Israel",
    platform: "Klaviyo",
    image: "/images/case1.jpg",
  },
  {
    id: 2,
    title: "Cyber Monday Promo",
    result: "$18K campaign revenue",
    type: "Promo automation",
    company: "Tech Brand",
    product: "Seasonal email promotion",
    platform: "Mailchimp",
    image: "/images/case2.jpg",
  },
  {
    id: 3,
    title: "Funexpected Kids Flow",
    result: "32% higher open rate",
    type: "Retention campaign",
    company: "Funexpected",
    product: "Learning game communication",
    platform: "Klaviyo",
    image: "/images/case3.jpg",
  },
];

const CasesSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCase = useMemo(() => {
    return cases[activeIndex] || cases[0];
  }, [activeIndex]);

  return (
    <section id="services" className="bg-[#f3f3f3] py-20 md:py-24">
      <div className="mx-auto max-w-350 px-6">
        <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff3b3f]">
              Services
            </p>

            <h2 className="max-w-190 text-4xl font-black uppercase leading-[1.02] md:text-5xl xl:text-6xl">
              Solutions that help your business grow faster
            </h2>
          </div>

          <p className="max-w-125 text-lg leading-8 text-black/65 lg:justify-self-end">
            We combine strategy, design and automation to build modern growth
            systems for brands and businesses.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">

          <div className="relative mx-auto flex w-full max-w-115 items-center justify-center">
            <Swiper
              effect="cards"
              grabCursor={true}
              modules={[EffectCards, Navigation]}
              navigation={{
                prevEl: ".cases-prev",
                nextEl: ".cases-next",
              }}
              cardsEffect={{
                perSlideOffset: 12,
                perSlideRotate: 2,
                rotate: true,
                slideShadows: false,
              }}
              className="cases-cards-swiper"
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              {cases.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="overflow-hidden rounded-[26px] border border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-117.5 w-full object-cover md:h-135"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>


          <div className="relative">
            <div className="absolute right-0 top-0 hidden h-65 w-65 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.06)_1.4px,transparent_1.4px)] bg-size-[16px_16px] lg:block" />

            <div className="relative z-10 max-w-135">
              <div className="mb-6">
                <h3 className="mb-2 text-3xl font-black leading-tight md:text-4xl">
                  {activeCase.title}
                </h3>

                <p className="text-black/55">
                  A selected campaign case with measurable business impact.
                </p>
              </div>

              <div className="space-y-3 text-[18px] leading-8">
                <div>
                  <span className="font-bold text-[#ff3b3f]">Result:</span>{" "}
                  <span className="text-black/80">{activeCase.result}</span>
                </div>

                <div>
                  <span className="font-bold text-[#ff3b3f]">Type:</span>{" "}
                  <span className="text-black/80">{activeCase.type}</span>
                </div>

                <div>
                  <span className="font-bold text-[#ff3b3f]">Company:</span>{" "}
                  <span className="text-black/80">{activeCase.company}</span>
                </div>

                <div>
                  <span className="font-bold text-[#ff3b3f]">Product:</span>{" "}
                  <span className="text-black/80">{activeCase.product}</span>
                </div>

                <div>
                  <span className="font-bold text-[#ff3b3f]">Platform:</span>{" "}
                  <span className="text-black/80">{activeCase.platform}</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  variant="outlined"
                  endIcon={<ArrowOutwardIcon />}
                  sx={{
                    borderColor: "#ff3b3f",
                    color: "#ff3b3f",
                    paddingX: "18px",
                    paddingY: "10px",
                    borderRadius: "10px",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    "&:hover": {
                      borderColor: "#ff3b3f",
                      backgroundColor: "rgba(255,59,63,0.05)",
                    },
                  }}
                >
                  Learn More
                </Button>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <button className="cases-prev flex h-12 w-12 items-center justify-center rounded-full border border-black/15 bg-white text-black/60 transition hover:border-[#ff3b3f] hover:text-[#ff3b3f]">
                  <ChevronLeftIcon />
                </button>

                <button className="cases-next flex h-12 w-12 items-center justify-center rounded-full border border-black/15 bg-white text-black/60 transition hover:border-[#ff3b3f] hover:text-[#ff3b3f]">
                  <ChevronRightIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesSlider;
