import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const SwiperTwo = ({ data }) => {
  return (
    <section className="bg-slate-950 px-6 py-12 text-white">
      <h2 className="mb-6 text-3xl font-bold">Layout 2</h2>

      <Swiper
        modules={[EffectCoverflow, Pagination]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 180,
          modifier: 1.8,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className="w-70!">
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/10 backdrop-blur">
              <img
                src={item.image}
                alt={`user-${item.id}`}
                className="h-90 w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SwiperTwo;
