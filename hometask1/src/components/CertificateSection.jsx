const CertificateSection = ({ course }) => {
  return (
    <section className="bg-[#07122e] px-6 py-16">
      <div className="mx-auto max-w-300">
        <div className="grid grid-cols-1 items-center gap-10 rounded-4xl bg-[#eaf4ff] px-10 py-12 lg:grid-cols-2">
          <div>
            <h2 className="text-5xl font-bold leading-tight text-[#1399ee]">
              {course.certificateTitle}
            </h2>

            <p className="mt-6 max-w-140 text-[22px] leading-9 text-[#24385b]">
              {course.certificateDescription}
            </p>

            <button className="mt-10 rounded-full border-2 border-[#1aa0f5] px-8 py-4 text-[22px] font-medium text-[#1aa0f5] transition hover:bg-[#1aa0f5] hover:text-white">
              Example certificate →
            </button>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://www.softclub.tj/certification.png"
              alt="certificate"
              className="w-full max-w-125 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;