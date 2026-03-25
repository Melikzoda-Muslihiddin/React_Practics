const categories = [
  "All",
  "Frontend",
  "Backend",
  "Mobile",
  "Kids",
  "Olympiad",
  "Design",
];

const FilterButtons = ({ selected, setSelected }) => {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
      {categories.map((category) => {
        const isActive = selected === category;

        return (
          <button
            key={category}
            onClick={() => setSelected(category)}
            className={`rounded-full px-6 py-1 text-lg transition-all duration-300 ${
              isActive
                ? "bg-white text-[#0a132f] shadow-[0_8px_30px_rgba(255,255,255,0.18)]"
                : "bg-[#101b3b] text-white hover:bg-[#16254d]"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default FilterButtons;