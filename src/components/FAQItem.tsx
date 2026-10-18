import { ChevronDown } from "lucide-react";
import type { FAQ } from "../data/faqs";

type FAQItemProps = {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
};

export default function FAQItem({ faq, isOpen, onToggle }: FAQItemProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-white/10 bg-[#11111B]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-white/3 sm:p-6"
      >
        <span className="font-semibold text-white">
          {faq.question}
        </span>
        <ChevronDown 
          size={20}
          className={`shrink-0 text-violet-400 transition-transform duration-300 ${isOpen ? "rotate-180": ""}`}
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 sm:px-6 sm:pb-6">
          <p className="leading-7 text-gray-400">
            {faq.answer}
          </p>
        </div>
      )}
    </article>
  );
}
