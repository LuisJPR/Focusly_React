import { Check } from "lucide-react";
import type { Plan } from "../data/plans";
import Button from "./Button";

type PricingCardProps = {
  plan: Plan;
};

export default function PricingCard({ plan }: PricingCardProps) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-2xl border p-6 transition-colors duration-300 sm:p-8
        ${plan.recommended ? "border-violet-500 bg-[#151122] shadow-xl shadow-violet-950/20" : "border-white/10 bg-[#11111B] hover:border-violet-500/40"}`}
    >
      {/* Etiqueta para el plan recomendado */}
      {plan.recommended && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-violet-600 px-4 py-1 text-xs font-semibold text-white">
          Más popular
        </span>
      )}
      {/* Nombre y descripcion */}
      <div>
        <h3 className="text-xl font-semibold text-white">
          {plan.name}
        </h3>
        <p className="mt-3 min-h-12 text-sm leading-6 text-gray-400">
          {plan.description}
        </p>
      </div>
      {/* Precio */}
      <div className="mt-6 flex items-baseline gap-2">
        <span className="text-4xl font-bold tracking-tight text-white">
          S/ {plan.price}
        </span>
        <span className="text-sm text-gray-400">
          {plan.period}
        </span>
      </div>
      {/* Boton */}
      <div className="mt-6">
        <Button 
          label={plan.buttonText}
          href="#contacto"
          className={`w-full ${plan.recommended ? "" : "border border-white/15 bg-transparent text-gray-200 hover:border-violet-400 hover:text-violet-300"}`}
        />
      </div>
      {/* Lista de beneficios */}
      <div className="mt-8 border-t border-white/10 pt-6">
        <p className="mb-4 text-sm font-semibold text-white">
          ¿Qué incluye?
        </p>
        <ul className="space-y-4">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3"
            >
              <Check 
                size={18}
                className="mt-0.5 shrink-0 text-violet-400"
                aria-hidden="true"
              />
              <span className="text-sm leading-6 text-gray-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
