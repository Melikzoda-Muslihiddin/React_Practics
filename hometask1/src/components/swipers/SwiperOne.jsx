import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SwiperOne = ({ data }) => {
  return (
    <section className="px-6 py-10">
      <h2 className="mb-6 text-3xl font-bold">Layout 1</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
              <img
                src={item.image}
                alt={`user-${item.id}`}
                className="h-80 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">User {item.id}</h3>
                <p className="text-sm text-gray-500">Simple card slider</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SwiperOne;
