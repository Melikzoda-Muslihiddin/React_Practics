const FacilityCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <article className="rounded-[20px] bg-white px-5 py-6 shadow-[0_12px_35px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1">
      <div className="flex h-13 w-13 items-center justify-center rounded-full bg-[#eef8f1]">
        <Icon className="h-6 w-6 text-[#43a86f]" />
      </div>

      <h3 className="mt-5 text-[15px] font-semibold text-slate-900">
        {item.title}
      </h3>

      <p className="mt-3 text-[12px] leading-6 text-slate-400">
        {item.description}
      </p>
    </article>
  );
};

export default FacilityCard;
