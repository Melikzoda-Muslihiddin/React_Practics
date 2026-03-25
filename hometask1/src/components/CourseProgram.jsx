import { useState } from "react";

const CourseProgram = ({ course }) => {
  const [openId, setOpenId] = useState(course.program?.[0]?.id || null);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-[#07122e] px-6 py-16">
      <div className="mx-auto max-w-300">
        <h2 className="text-center text-5xl font-bold text-white">
          Course program
        </h2>

        <div className="mt-14 space-y-6">
          {course.program?.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-[28px] border transition-all duration-300 ${
                  isOpen
                    ? "border-[#56b6ff] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.18)]"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <button
                  onClick={() => handleToggle(item.id)}
                  className="flex w-full items-center justify-between px-8 py-7 text-left"
                >
                  <div className="flex items-center gap-6">
                    <div
                      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-[18px] text-2xl font-bold ${
                        isOpen
                          ? "bg-[#1aa0f5] text-white shadow-[0_10px_25px_rgba(26,160,245,0.35)]"
                          : "bg-[#0f8fe7] text-white"
                      }`}
                    >
                      {String(item.id).padStart(2, "0")}
                    </div>

                    <h3
                      className={`text-2xl font-semibold ${
                        isOpen ? "text-[#0b1a3a]" : "text-white"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <span
                    className={`text-3xl transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#0b1a3a]" : "text-white/70"
                    }`}
                  >
                    ⌄
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4">
                    <div className="rounded-2xl bg-[#f4f8fc] p-4">
                      <ul className="space-y-4">
                        {item.topics.map((topic, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-4 text-[20px] leading-8 text-[#4b587c]"
                          >
                            <span className="mt-1 text-[#19c15f]">✔</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CourseProgram;
