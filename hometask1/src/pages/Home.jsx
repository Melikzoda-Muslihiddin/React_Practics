import { useEffect, useMemo, useState } from "react";
import CourseCard from "../components/CourseCard";
import FilterButtons from "../components/FilterButtons";
import data from "../data/courses.json";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [selected, setSelected] = useState("All");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setCourses(data);
  }, []);

  const filteredCourses = useMemo(() => {
    return selected === "All"
      ? courses
      : courses.filter((course) => course.category === selected);
  }, [courses, selected]);

  const visibleCourses = showAll
    ? filteredCourses
    : filteredCourses.slice(0, 6);

  useEffect(() => {
    setShowAll(false);
  }, [selected]);
  return (
    <section className="min-h-screen bg-[#07122e] px-4 py-6 text-white">
      <div className="mx-auto max-w-370">
        <h1 className="text-center text-5xl font-bold leading-tight">
          Academy Courses
        </h1>

        <p className="mx-auto mt-5 max-w-205 text-center text-[18px] leading-4 text-white/70">
          Choose your learning path and build skills in Frontend, Backend,
          Mobile development, or start with our Kids program
        </p>

        <FilterButtons selected={selected} setSelected={setSelected} />

        <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
          {visibleCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {filteredCourses.length > 6 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="rounded-full border border-white/15 bg-white/10 px-8 py-4 text-lg text-white/85 transition hover:bg-white/15"
            >
              {showAll
                ? "Show Less"
                : `Show All (${filteredCourses.length - 6} more)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
