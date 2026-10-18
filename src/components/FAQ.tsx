import { useState } from "react";
import { faqs } from "../data/faqs";
import FAQItem from "./FAQItem";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="preguntas-frecuentes"
      className="bg-[#09090F] px-4 py-20 text-white sm:px-6 md:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-3xl">
        {/* Encabezado */}
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-violet-400">
            Preguntas frecuentes
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            ¿Tienes alguna duda?
          </h2>
          <p className="mt-5 leading-7 text-gray-400">
            Encuentra respuestas a las preguntas más comunes sobre Focusly.
          </p>
        </div>
        {/* Lista de preguntas */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={faq.id}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
