import { Link } from "react-router-dom";
import hotels from "../../data/hotels";
import HotelCard from "../cards/HotelCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const CatalogPopularSection = () => {
  return (
    <section className="bg-[#f8f8f8] px-6 py-16">
      <div className="mx-auto max-w-280">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#3FA66B]">
              Popular Hotels
            </p>

            <h2 className="mt-4 text-[30px] font-semibold leading-[1.15] text-slate-900">
              Similar hotels you may like
            </h2>

            <p className="mt-3 text-[12px] leading-6 text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <Link
            to="/"
            className="rounded-full border border-[#dcebdd] bg-[#f4fbf6] px-4 py-2 text-[11px] font-medium text-[#3FA66B]"
          >
            View all
          </Link>
        </div>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={20}
          loop
          speed={4500}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          breakpoints={{
            0: { slidesPerView: 1.15 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {hotels.concat(hotels).map((hotel, index) => (
            <SwiperSlide key={index}>
              <HotelCard hotel={hotel} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CatalogPopularSection;
