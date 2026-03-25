import { Link } from "react-router-dom";

const cardThemes = {
  "HTML & CSS": "from-[#4b1f2c] to-[#34213f] border-l-[4px] border-l-[#ff5a36]",
  JavaScript: "from-[#4b4120] to-[#2a2a22] border-l-[4px] border-l-[#f7c400]",
  React: "from-[#17344b] to-[#223747] border-l-[4px] border-l-[#67d7ff]",
  Design: "from-[#183521] to-[#223b1e] border-l-[4px] border-l-[#7dff00]",
  "Basics of C++":
    "from-[#213f67] to-[#294364] border-l-[4px] border-l-[#67b7ff]",
  Python: "from-[#0f3b42] to-[#123f49] border-l-[4px] border-l-[#0ed1c3]",
  "C#": "from-[#32264f] to-[#2b2443] border-l-[4px] border-l-[#d56dff]",
  Git: "from-[#4a2229] to-[#41232b] border-l-[4px] border-l-[#ff623d]",
  Flutter: "from-[#1d3c59] to-[#25445f] border-l-[4px] border-l-[#74d0ff]",
  "Programming for teenagers":
    "from-[#173768] to-[#183663] border-l-[4px] border-l-[#5fa1ff]",
};

const badgeThemes = {
  Frontend: "bg-[#3d2a2b] text-[#ff6b3d]",
  Backend: "bg-[#22364f] text-[#62b2ff]",
  Mobile: "bg-[#133c45] text-[#22d3c5]",
  Kids: "bg-[#213a5f] text-[#69a7ff]",
  Olympiad: "bg-[#3b324d] text-[#d3a9ff]",
  Design: "bg-[#2f441b] text-[#8fe63d]",
};

const CourseCard = ({ course }) => {
  const cardClass =
    cardThemes[course.title] ||
    "from-[#111b39] to-[#101833] border-l-[4px] border-l-[#4e7bff]";

  const badgeClass =
    badgeThemes[course.category] || "bg-[#22364f] text-[#62b2ff]";

  return (
    <Link to={`/courses/${course.slug}`} className="block">
      <article
        className={`group relative min-h-73.75 overflow-hidden rounded-[20px] border border-white/8 bg-linear-to-br p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(0,0,0,0.3)] ${cardClass}`}
      >
        <div className="absolute right-7 top-7 flex h-18 w-18 items-center justify-center rounded-full bg-white/8">
          <img
            src={course.image}
            alt={course.title}
            className="h-12 w-12 object-contain"
          />
        </div>

        <div className="flex h-full flex-col">
          <h2 className="max-w-[70%] text-[28px] font-bold leading-tight text-white">
            {course.title}
          </h2>

          <p className="mt-8 max-w-[82%] text-[18px] leading-9 text-white/65">
            {course.description}
          </p>

          <div className="mt-auto flex items-center gap-4 pt-8">
            <div
              className={`rounded-full px-5 py-2 text-[16px] font-medium ${badgeClass}`}
            >
              ⏱ {course.duration}
            </div>

            <span className="text-[18px] text-white/55">{course.category}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default CourseCard;
