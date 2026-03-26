import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const SwiperThree = ({ data }) => {
  return (
    <section className="px-6 py-12">
      <h2 className="mb-8 text-3xl font-bold">Layout 3</h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 1800 }}
        loop
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1200: { slidesPerView: 6 },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col items-center">
              <img
                src={item.image}
                alt={`user-${item.id}`}
                className="h-28 w-28 rounded-full border-4 border-blue-500 object-cover shadow-lg"
              />
              <p className="mt-3 font-medium">Profile {item.id}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SwiperThree;
