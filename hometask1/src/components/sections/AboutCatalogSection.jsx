import {
  CheckCircleIcon,
  SparklesIcon,
  ShieldCheckIcon,
  HomeModernIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    id: 1,
    title: "Comfortable rooms",
    icon: HomeModernIcon,
  },
  {
    id: 2,
    title: "Premium service",
    icon: SparklesIcon,
  },
  {
    id: 3,
    title: "Safe and secure stay",
    icon: ShieldCheckIcon,
  },
];

const AboutCatalogSection = () => {
  return (
    <section className="bg-[#f8f8f8] px-6 py-16">
      <div className="mx-auto grid max-w-280 items-center gap-10 lg:grid-cols-[1fr_420px]">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#3FA66B]">
            About hotel
          </p>

          <h2 className="mt-4 max-w-105 text-[30px] font-semibold leading-[1.15] text-slate-900">
            A comfortable place for your perfect vacation
          </h2>

          <p className="mt-5 max-w-140 text-[12px] leading-7 text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            deleniti, dolorum deserunt molestias exercitationem repellat
            voluptatem nemo illum. Quam, voluptatum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Dolorum, magni.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className="flex items-center gap-3 rounded-[14px] bg-white px-4 py-4 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef8f1]">
                    <Icon className="h-5 w-5 text-[#3FA66B]" />
                  </div>

                  <p className="text-[13px] font-medium text-slate-800">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>

          <button className="mt-8 rounded-full bg-[#3FA66B] px-6 py-3 text-[12px] font-semibold text-white transition hover:opacity-90">
            Learn more
          </button>
        </div>

        <div className="overflow-hidden rounded-[20px]">
          <img
            src="/images/about-hotel.png"
            alt="About hotel"
            className="h-105 w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutCatalogSection;
