const stats = (course) => [
  {
    id: 1,
    title: course.startDate,
    icon: "📅",
  },
  {
    id: 2,
    title: course.classesPerWeek,
    icon: "🕒",
  },
  {
    id: 3,
    title: course.portfolioProjects,
    icon: "☰",
  },
  {
    id: 4,
    title: course.groupSize,
    icon: "👥",
  },
  {
    id: 5,
    title: course.seatsLeft,
    icon: "💺",
  },
  {
    id: 6,
    title: course.certificateText,
    icon: "🏅",
  },
];

const CourseStats = ({ course }) => {
  const items = stats(course);

  return (
    <section className="bg-[#07122e] px-6 pb-12 text-white">
      <div className="mx-auto grid max-w-300 grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex min-h-21.5 items-center gap-4 rounded-[22px] border border-white/10 bg-white/5 px-6 shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0d8fe8]/15 text-2xl">
              {item.icon}
            </div>

            <p className="text-[18px] font-medium text-white/90">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseStats;
