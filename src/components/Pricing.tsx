import { plans } from "../data/plans";
import PricingCard from "./PricingCard";

export default function Pricing() {
  return (
    <section
      id="precios"
      className="bg-[#09090F] px-4 py-20 text-white sm:px-6 md:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Encabezado de la seccion */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-violet-400">
            Planes y precios
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Encuentra el plan ideal para ti
          </h2>
          <p className="mt-5 leading-7 text-gray-400">
            Empieza gratis y descubre las herramientas que necesitas para organizar tus tareas y mejorar tu productividad.
          </p>
        </div>
        {/* Tarjetas de precios */}
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard 
              key={plan.id}
              plan={plan}
            />
          ))}
        </div>
        {/* Informacion adicional */}
        <p className="mt-10 text-center text-sm text-gray-500">
          Elige el plan que mejor se adapte a tus necesidades. Puedes empezar con la opción gratuita.
        </p>
      </div>
    </section>
  );
}
