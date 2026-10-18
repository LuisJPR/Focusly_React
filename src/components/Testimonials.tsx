import { testimonials } from "../data/testimonials";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="bg-[#09090F] px-4 py-20 text-white sm:px-6 md:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Encabezado de la seccion */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-violet-400">
            Testimonios
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Personas que encuentran su enfoque
          </h2>
          <p className="mt-5 leading-7 text-gray-400">
            Descubre cómo Focusly ayuda a organizar tareas,
            aprovechar el tiempo y avanzar hacia nuevos objetivos.
          </p>
        </div>
        {/* Tarjetas generadas a partir de los datos */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard 
              key={testimonial.id}
              name={testimonial.name}
              role={testimonial.role}
              comment={testimonial.comment}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
