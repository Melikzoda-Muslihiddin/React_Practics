const LaptopSection = ({ course }) => {
  const getIcon = (type) => {
    switch (type.toLowerCase()) {
      case "processor":
        return "🧠";
      case "operating system":
        return "🖥️";
      case "ram":
        return "📦";
      case "storage":
        return "💾";
      default:
        return "⚙️";
    }
  };
  return (
    <section className="bg-[#07122e] px-6 py-16">
      <div className="mx-auto max-w-300">
        <h2 className="text-center text-4xl font-bold text-white">
          <span className="text-[#1aa0f5]">Minimum</span> required laptop for
          the course
        </h2>
        <div className="mt-16 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="flex justify-center">
            <div className="rounded-3xl bg-[#ffffff] pr-15 py-8 pl-10">
              <img
                src="https://www.softclub.tj/macbook.png"
                alt="laptop"
                className="w-[320px] object-contain"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {course.laptopRequirements?.map((item, index) => (
              <div
                key={index}
                className="relative rounded-[20px] bg-white px-6 py-6 shadow-lg"
              >
                <div className="absolute left-0 top-0 h-1 w-full rounded-t-[20px] bg-[#1aa0f5]" />

                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#eef4ff] text-2xl">
                    {getIcon(item.subtitle)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0b1a3a]">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-[#1aa0f5]">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaptopSection;
