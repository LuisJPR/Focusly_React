type Testimonial = {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María Torres",
    role: "Diseñadora UX/UI",
    comment: "Focusly me ayuda a organizar mis proyectos y mantener el enfoque incluso en los días más ocupados.",
    rating: 5,
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    role: "Desarrollador web",
    comment: "Ahora tengo una visión más clara de mis tareas y puedo priorizar mejor lo que necesito hacer cada día.",
    rating: 5,
  },
  {
    id: 3,
    name: "Andrea Castillo",
    role: "Estudiante universitaria",
    comment: "Me gusta lo sencillo que es organizar mis actividades. Me permite aprovechar mejor mi tiempo de estudio.",
    rating: 4,
  },
];