const HistorySection = () => {
  return (
    <section className="bg-[#f8f8f8] px-6 py-16">
      <div className="mx-auto grid max-w-280 items-center gap-10 lg:grid-cols-[520px_1fr]">
        <div className="relative">
          <div className="overflow-hidden rounded-[20px]">
            <img
              src="/images/history.png"
              alt="Hotel"
              className="h-90 w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 h-30 w-30 rounded-full bg-[#3FA66B]/10 blur-2xl" />
        </div>
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#3FA66B]">
            Discover
          </p>

          <h2 className="mt-4 max-w-90 text-[30px] font-semibold leading-[1.2] text-slate-900">
            Discover our History
          </h2>

          <p className="mt-5 max-w-105 text-[12px] leading-6 text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            voluptatem fugiat minus, labore consequatur adipisci placeat.
          </p>

          <button className="mt-6 rounded-full bg-[#3FA66B] px-6 py-3 text-[12px] font-semibold text-white transition hover:opacity-90">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;

