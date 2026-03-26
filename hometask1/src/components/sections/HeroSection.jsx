import {
  MapPinIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  MagnifyingGlassIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/outline";

const HeroSection = () => {
  return (
    <section className="bg-[#f8f8f8] pb-12 pt-2">
      <div className="mx-auto max-w-280 px-6">
        <div className="grid items-end gap-10 lg:grid-cols-[420px_1fr]">
          <div className="pb-12 pt-10 lg:pt-14">
            <p className="mb-5 text-[11px] font-medium leading-none text-slate-400">
              Booking &nbsp;&nbsp; Hotels &nbsp;&nbsp; details
            </p>

            <h1 className="max-w-90 text-[50px] font-semibold leading-[1.08] tracking-[-0.03em] text-slate-900">
              Find your perfect place to stay
            </h1>

            <p className="mt-5 max-w-82.5 text-[12px] leading-6 text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              magni blanditiis, illo ullam, recusandae eius cupiditate.
            </p>

            <button className="mt-7 inline-flex items-center gap-2 text-[13px] font-medium text-[#43a86f]">
              <PlayCircleIcon className="h-5 w-5" />
              <span>Watch video</span>
            </button>
          </div>

          <div className="relative ml-auto w-full max-w-153.75">
            <div className="overflow-hidden rounded-[22px]">
              <img
                src="/images/hero.png"
                alt="Modern house"
                className="h-97.5 w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="relative z-10 -mt-6.5">
          <div className="grid gap-3 rounded-full bg-white px-4 py-4 shadow-[0_18px_45px_rgba(15,23,42,0.08)] lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto] lg:items-center lg:px-5">
            <div className="flex items-center gap-3 rounded-full px-3 py-2">
              <MapPinIcon className="h-5 w-5 text-[#43a86f]" />
              <div>
                <p className="text-[11px] font-semibold leading-none text-slate-700">
                  Location
                </p>
                <p className="mt-1 text-[11px] leading-none text-slate-400">
                  United States
                </p>
              </div>
            </div>

            <div className="hidden h-8 w-px bg-slate-200 lg:block" />

            <div className="flex items-center gap-3 rounded-full px-3 py-2">
              <CalendarDaysIcon className="h-5 w-5 text-[#43a86f]" />
              <div>
                <p className="text-[11px] font-semibold leading-none text-slate-700">
                  Check in
                </p>
                <p className="mt-1 text-[11px] leading-none text-slate-400">
                  10 Jun 2026
                </p>
              </div>
            </div>

            <div className="hidden h-8 w-px bg-slate-200 lg:block" />

            <div className="flex items-center gap-3 rounded-full px-3 py-2">
              <CalendarDaysIcon className="h-5 w-5 text-[#43a86f]" />
              <div>
                <p className="text-[11px] font-semibold leading-none text-slate-700">
                  Check out
                </p>
                <p className="mt-1 text-[11px] leading-none text-slate-400">
                  16 Jun 2026
                </p>
              </div>
            </div>

            <div className="hidden h-8 w-px bg-slate-200 lg:block" />

            <div className="flex items-center gap-3 rounded-full px-3 py-2">
              <UserGroupIcon className="h-5 w-5 text-[#43a86f]" />
              <div>
                <p className="text-[11px] font-semibold leading-none text-slate-700">
                  Rooms for
                </p>
                <p className="mt-1 text-[11px] leading-none text-slate-400">
                  2 adults
                </p>
              </div>
            </div>

            <button className="inline-flex h-11.5 items-center justify-center gap-2 rounded-full bg-[#43a86f] px-6 text-[12px] font-semibold text-white transition hover:opacity-90">
              <MagnifyingGlassIcon className="h-4 w-4" />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
