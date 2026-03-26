import { StarIcon } from "@heroicons/react/24/solid";

const HotelCard = ({ hotel }) => {
  return (
    <article className="group">
      <div className="overflow-hidden rounded-[14px] bg-white">
        <img
          src={hotel.image}
          alt={hotel.title}
          className="h-46.25 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="pt-3">
        <h3 className="text-[13px] font-semibold text-slate-900">
          {hotel.title}
        </h3>

        <div className="mt-2 flex items-center justify-between gap-3">
          <p className="text-[11px] text-slate-400">{hotel.price}</p>

          <div className="flex items-center gap-1">
            <StarIcon className="h-3.5 w-3.5 text-[#ff5d5d]" />
            <StarIcon className="h-3.5 w-3.5 text-[#ff5d5d]" />
            <StarIcon className="h-3.5 w-3.5 text-[#ff5d5d]" />
            <StarIcon className="h-3.5 w-3.5 text-[#ff5d5d]" />
            <span className="ml-1 text-[11px] text-slate-400">
              {hotel.rating}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default HotelCard;
