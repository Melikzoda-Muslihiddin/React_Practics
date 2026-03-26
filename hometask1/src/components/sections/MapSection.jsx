const MapSection = ({ contactRef = null }) => {
  return (
    <section ref={contactRef} className="bg-[#f8f8f8] px-6 pb-16 pt-6">
      <div className="mx-auto max-w-280 overflow-hidden rounded-[18px] border border-[#ececec] bg-white">
        <div className="relative h-80 w-full overflow-hidden bg-[#f2f2f2]">
          <img
            src="/images/map.png"
            alt="Map"
            className="h-full w-full object-cover"
          />

          <div className="absolute left-1/2 top-1/2 flex h-13.5 w-13.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#dff3e7]">
            <div className="h-4.5 w-4.5 rounded-full bg-[#3FA66B]"></div>
          </div>

          <div className="absolute left-1/2 top-1/2 h-22.5 w-22.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#3FA66B]/20"></div>
        </div>

        <div className="grid gap-4 px-6 py-5 md:grid-cols-[1.2fr_1fr_1fr_auto] md:items-end">
          <div>
            <h3 className="text-[20px] font-semibold text-slate-900">
              Location of our Hotels
            </h3>
            <p className="mt-2 max-w-105 text-[12px] leading-6 text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, harum. Quisquam neque officia voluptate suscipit.
            </p>
          </div>

          <div>
            <label className="mb-2 block text-[11px] font-medium text-slate-500">
              Your email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="h-10.5 w-full rounded-full border border-[#e8e8e8] px-4 text-[12px] outline-none placeholder:text-slate-300 focus:border-[#3FA66B]"
            />
          </div>

          <div>
            <label className="mb-2 block text-[11px] font-medium text-slate-500">
              Your message
            </label>
            <input
              type="text"
              placeholder="Type your message"
              className="h-10.5 w-full rounded-full border border-[#e8e8e8] px-4 text-[12px] outline-none placeholder:text-slate-300 focus:border-[#3FA66B]"
            />
          </div>

          <button className="h-10.5 rounded-full bg-[#3FA66B] px-6 text-[12px] font-semibold text-white transition hover:opacity-90">
            Contact
          </button>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
