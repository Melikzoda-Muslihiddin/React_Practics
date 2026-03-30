import { useState } from "react";
import faq from "../../data/faq";
import FaqItem from "../cards/FaqItem";

const FaqSection = () => {
  const [openId, setOpenId] = useState(1);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-[#f8f8f8] px-6 py-16">
      <div className="mx-auto grid max-w-280 gap-10 lg:grid-cols-[340px_1fr]">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#3FA66B]">
            Questions
          </p>

          <h2 className="mt-4 max-w-65 text-[30px] font-semibold leading-[1.15] text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 max-w-70 text-[12px] leading-6 text-slate-400">
            Proin nibh lacus, aliquet non elit at, interdum cursus tortor.
            Integer facilisis arcu nibh.
          </p>
        </div>

        <div className="space-y-4">
          {faq.map((item) => (
            <FaqItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
