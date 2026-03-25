const WhySection = ({ course }) => {
  return (
    <section className="bg-[#07122e] px-6 py-12">
      <div className="mx-auto max-w-300">
        <div className="rounded-2xl bg-white px-8 py-10 shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
          <h2 className="text-3xl font-bold text-[#0b1a3a]">
            {course.whyTitle}
          </h2>

          <p className="mt-6 text-[18px] leading-8 text-[#4b587c]">
            {course.whyDescription}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
