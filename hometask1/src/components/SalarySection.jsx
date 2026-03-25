const SalarySection = ({ course }) => {
  return (
    <section className="bg-[#07122e] px-6 py-12">
      <div className="mx-auto max-w-300 rounded-2xl bg-white px-8 py-10 shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
        <h2 className="text-3xl font-bold text-[#0b1a3a]">
          Average salaries in IT professions
        </h2>

        <p className="mt-4 max-w-190 text-[18px] leading-8 text-[#4b587c]">
          After mastering the basics and building practical skills, students can
          grow from junior roles to stronger middle and senior positions.
        </p>

        <div className="flex items-center gap-5">
            <img className="w-90 h-90" src="https://www.softclub.tj/_next/image?url=%2Fwallet.png&w=640&q=75" alt="" />
          <div className="rounded-2xl border border-[#e8edf7] bg-[#f8fbff] w-55 py-3 text-center">
            <p className="text-lg font-medium text-[#5b6788]">Junior</p>
            <h3 className="mt-3 text-2xl font-bold text-[#0b1a3a]">
              {course.salaryJunior}
            </h3>
          </div>

          <div className="rounded-2xl border border-[#dceaff] bg-[#eef6ff] w-55 py-3 text-center">
            <p className="text-lg font-medium text-[#3f6aa2]">Middle</p>
            <h3 className="mt-3 text-2xl font-bold text-[#0b1a3a]">
              {course.salaryMiddle}
            </h3>
          </div>

          <div className="rounded-2xl border border-[#e8edf7] bg-[#f8fbff] w-55 py-3 text-center">
            <p className="text-lg font-medium text-[#5b6788]">Senior</p>
            <h3 className="mt-3 text-2xl font-bold text-[#0b1a3a]">
              {course.salarySenior}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalarySection;
