import { Link } from "react-router-dom";
import hotels from "../../data/hotels";
import HotelCard from "../cards/HotelCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const PopularHotelsSection = () => {
  return (
    <section className="bg-[#f8f8f8] px-6 pb-16 pt-8">
      <div className="mx-auto max-w-312.5">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-[28px] font-semibold text-slate-900">
              Our most popular Hotels
            </h2>
            <p className="mt-3 text-[12px] text-slate-400">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>

          <Link
            to="/catalog"
            className="rounded-full border border-[#dcebdd] bg-[#f4fbf6] px-4 py-2 text-[11px] font-medium text-[#3FA66B]"
          >
            View all
          </Link>
        </div>
        <Swiper
          loopAdditionalSlides={8}
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          breakpoints={{
            0: { slidesPerView: 1.2 },
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

export default PopularHotelsSection;
