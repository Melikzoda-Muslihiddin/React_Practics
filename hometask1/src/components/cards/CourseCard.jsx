import { Link } from "react-router-dom";
import {
  CalendarDaysIcon,
  ClockIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const CourseCard = ({ course }) => {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <img
        src={course.image}
        alt={course.title}
        className="h-55 w-full object-cover"
      />

      <div className="p-5">
        <p className="text-sm font-medium text-[#f59e0b]">{course.category}</p>

        <h3 className="mt-2 text-xl font-bold text-slate-900">
          {course.title}
        </h3>

        <div className="mt-4 space-y-2 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <CalendarDaysIcon className="h-5 w-5" />
            <span>{course.lessons} lessons</span>
          </div>

          <div className="flex items-center gap-2">
            <ClockIcon className="h-5 w-5" />
            <span>{course.duration}</span>
          </div>

          <div className="flex items-center gap-2">
            <UserIcon className="h-5 w-5" />
            <span>{course.students} students</span>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <p className="text-lg font-bold text-slate-900">${course.price}</p>

          <Link
            to={`/course/${course.id}`}
            className="rounded-full bg-[#DDDDDD] px-4 py-2 text-sm font-semibold text-white"
          >
            Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;
