import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const logos = [
  "/images/logo1.svg",
  "/images/logo2.svg",
  "/images/logo3.svg",
  "/images/logo4.svg",
  "/images/logo5.svg",
  "/images/logo6.svg",
];

const Partners = () => {
  const items = [...logos, ...logos, ...logos];

  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-350 px-6">
        <div className="mb-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff3b3f]">
            Trusted partners
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={50}
          loop={true}
          allowTouchMove={false}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          className="partners-swiper"
        >
          {items.map((logo, index) => (
            <SwiperSlide key={index} className="w-auto!">
              <div className="flex h-14 items-center justify-center">
                <img
                  src={logo}
                  alt="partner logo"
                  className="h-8 w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
