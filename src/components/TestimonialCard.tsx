import { Star } from "lucide-react";

type TestimonialCardProps = {
  name: string;
  role: string;
  comment: string;
  rating: number;
};

export default function TestimonialCard({
  name,
  role,
  comment,
  rating,
}: TestimonialCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#11111B] p-6 transition-colors duration-300 hover:border-violet-500/50">
      {/* Puntuacion con estrellas  */}
      <div
        className="mb-5 flex gap-1 text-violet-400"
        aria-label={`Puntuación: ${rating} de 5`}
      >
        {Array.from({ length: 5 }, (_, index) => (
          <Star 
            key={index}
            size={18}
            fill={index < rating ? "currentColor" : "none"}
            className={index < rating ? "text-violet-400" : "text-gray-600"}
          />
        ))}
      </div>
      {/* Opinión del usuario */}
      <p className="flex-1 leading-7 text-gray-300">
        “{comment}”
      </p>

      {/* Información del usuario */}
      <div className="mt-6 border-t border-white/10 pt-5">
        <h3 className="font-semibold text-white">{name}</h3>
        <p className="mt-1 text-sm text-gray-400">{role}</p>
      </div>
    </article>
  );
}
