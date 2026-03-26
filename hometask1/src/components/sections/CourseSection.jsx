import courses from "../../data/courses";
import CourseCard from "../cards/CourseCard";

const CoursesSection = () => {
  return (
    <section className="bg-[#f8fafc] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[3px] text-[#f59e0b]">
              Popular courses
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Explore top categories and start learning
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
