import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const gallery = [
  "/images/hotel-main.png",
  "/images/hotel-1.png",
  "/images/hotel-2.png",
  "/images/hotel-3.png",
];

const HotelShowcaseSection = () => {
  const [activeImage, setActiveImage] = useState(gallery[0]);

  return (
    <section className="bg-[#f8f8f8] px-6 py-12">
      <div className="mx-auto grid max-w-280 gap-10 lg:grid-cols-[1fr_420px]">
        <div>
          <div className="overflow-hidden rounded-[18px]">
            <img
              src={activeImage}
              alt="Hotel"
              className="h-90 w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-4">
              <h2 className="max-w-65 text-[22px] font-semibold text-slate-900">
                Danubius Hotel Regents Park
              </h2>

              <p className="whitespace-nowrap text-[16px] font-semibold text-[#3FA66B]">
                $200 / night
              </p>
            </div>

            <div className="mt-3 flex items-center gap-1">
              <StarIcon className="h-4 w-4 text-[#ff5d5d]" />
              <StarIcon className="h-4 w-4 text-[#ff5d5d]" />
              <StarIcon className="h-4 w-4 text-[#ff5d5d]" />
              <StarIcon className="h-4 w-4 text-[#ff5d5d]" />
              <span className="ml-2 text-[12px] text-slate-400">4.8</span>
            </div>

            <p className="mt-4 text-[12px] leading-6 text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              pariatur. Reprehenderit accusantium saepe nam optio, reiciendis
              perferendis quaerat? Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>

            <button className="mt-5 rounded-full bg-[#3FA66B] px-6 py-3 text-[12px] font-semibold text-white transition hover:opacity-90">
              Take room now
            </button>
          </div>

          <div className="mt-6 flex gap-3">
            {gallery.map((image, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveImage(image)}
                className={`overflow-hidden rounded-[10px] border-2 transition ${
                  activeImage === image
                    ? "border-[#3FA66B]"
                    : "border-transparent"
                }`}
              >
                <img
                  src={image}
                  alt={`Hotel preview ${index + 1}`}
                  className="h-17.5 w-22.5 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelShowcaseSection;
