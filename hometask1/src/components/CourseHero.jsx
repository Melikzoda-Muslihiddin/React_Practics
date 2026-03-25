import { Link } from "react-router-dom";

const CourseHero = ({ course }) => {
  return (
    <section className="bg-[#07122e] px-6 py-16 text-white">
      <div className="mx-auto max-w-300">
        <Link
          to="/"
          className="mb-8 inline-block text-lg text-white/70 transition hover:text-white"
        >
          ← Back
        </Link>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-lg text-white/50">{course.category}</p>

            <h1 className="mt-3 text-5xl font-bold leading-tight">
              {course.title}
            </h1>

            <p className="mt-6 max-w-162.5 text-xl leading-9 text-white/70">
              {course.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="rounded-full bg-white/10 px-5 py-2 text-lg">
                ⏱ {course.duration}
              </span>

              <span className="rounded-full border border-white/15 px-5 py-2 text-lg text-white/75">
                {course.category}
              </span>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="flex h-80 w-full max-w-105 items-center justify-center rounded-4xl border border-white/10 bg-linear-to-br from-[#122349] to-[#0c1734] p-10">
              <img
                src={course.image}
                alt={course.title}
                className="h-45 w-45 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHero;
