import { features } from "../data/features";
import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section
      id="caracteristicas"
      className="bg-[#09090f] px-4 py-20 text-white sm:px-6 md:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Encabezado de la seccion */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-violet-400">
            Caracteristicas
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Todo lo que necesitas para mantener el enfoque
          </h2>
          <p className="mt-5 leading-7 text-gray-400">
            Herramientas sencillas para organizar tus tareas, aprovechar tu
            tiempo y alcanzar tus objetivos.
          </p>
        </div>
        {/* Tarjetas generadas a partir de los datos */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
