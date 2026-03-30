import facilities from "../../data/facilities";
import FacilityCard from "../cards/FacilityCard";

const FacilitiesSection = () => {
  return (
    <section className="bg-[#f8f8f8] px-6 py-16">
      <div className="mx-auto grid max-w-280 gap-12 lg:grid-cols-[300px_1fr]">
        <div className="pt-2">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#43a86f]">
            Facilities
          </p>

          <h2 className="mt-4 max-w-65 text-[32px] font-semibold leading-[1.12] tracking-[-0.02em] text-slate-900">
            We do our best facilities provide you
          </h2>

          <p className="mt-4 max-w-63.75 text-[12px] leading-6 text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            maiores. Architecto vitae molestiae placeat.
          </p>

          <button className="mt-7 inline-flex h-10.5 items-center justify-center rounded-full bg-[#43a86f] px-5 text-[12px] font-semibold text-white transition hover:opacity-90">
            Contact now
          </button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {facilities.map((item) => (
            <FacilityCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
