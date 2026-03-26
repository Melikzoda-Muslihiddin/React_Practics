import { useRef } from "react";
import testimonials from "../../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const TestimonialSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-[#f8f8f8] px-6 py-16">
      <div className="mx-auto max-w-280">
        <div className="relative">
          <button
            ref={prevRef}
            className="absolute -left-4.5 top-1/2 z-20 flex h-9.5 w-9.5 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#8fd0a8] shadow-[0_8px_25px_rgba(15,23,42,0.08)] transition hover:bg-[#f3fbf6]"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </button>

          <button
            ref={nextRef}
            className="absolute -right-4.5 top-1/2 z-20 flex h-9.5 w-9.5 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#3FA66B] shadow-[0_8px_25px_rgba(15,23,42,0.08)] transition hover:bg-[#f3fbf6]"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </button>

          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="overflow-hidden rounded-[18px] bg-[#f3f3f3]">
                  <div className="grid min-h-77.5 items-stretch lg:grid-cols-[1fr_320px]">
                    <div className="flex flex-col justify-between px-14 py-10">
                      <div>
                        <p className="text-[64px] leading-none text-[#3FA66B]">
                          “
                        </p>

                        <p className="-mt-3.5 max-w-140 text-[16px] leading-loose text-[#666666]">
                          {item.text}
                        </p>

                        <p className="-mt-2.5 text-right text-[64px] leading-none text-[#3FA66B]">
                          ”
                        </p>
                      </div>

                      <div className="mt-8">
                        <h3 className="text-[18px] font-semibold text-[#2d2d2d]">
                          {item.name}
                        </h3>
                        <p className="mt-2 text-[14px] text-[#7f7f7f]">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    <div className="h-full">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
