import { StarIcon } from "@heroicons/react/24/solid";

const TestimonialCard = ({ item }) => {
  return (
    <div className="rounded-[18px] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="h-12 w-12 rounded-full object-cover"
        />

        <div>
          <h4 className="text-[13px] font-semibold text-slate-900">
            {item.name}
          </h4>
          <p className="text-[11px] text-slate-400">{item.role}</p>
        </div>
      </div>

      <p className="mt-4 text-[12px] leading-6 text-slate-500">{item.text}</p>

      <div className="mt-4 flex items-center gap-1">
        <StarIcon className="h-4 w-4 text-[#ff5d5d]" />
        <StarIcon className="h-4 w-4 text-[#ff5d5d]" />
        <StarIcon className="h-4 w-4 text-[#ff5d5d]" />
        <StarIcon className="h-4 w-4 text-[#ff5d5d]" />
        <StarIcon className="h-4 w-4 text-[#ff5d5d]" />
      </div>
    </div>
  );
};

export default TestimonialCard;
