import { ChevronDownIcon } from "@heroicons/react/24/outline";

const FaqItem = ({ item, isOpen, onToggle }) => {
  return (
    <div className="overflow-hidden rounded-[14px] border border-[#ececec] bg-white">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-[13px] font-medium text-slate-800">
          {item.question}
        </span>

        <ChevronDownIcon
          className={`h-4 w-4 text-slate-400 transition ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-4 text-[12px] leading-6 text-slate-400">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
