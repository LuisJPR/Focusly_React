export type FAQ = {
  id: number;
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "¿Focusly tiene un plan gratuito?",
    answer: "Sí. Puedes comenzar con el plan gratuito para organizar tus tareas y proyectos. Si necesitas más herramientas, puedes elegir uno de los planes de pago.",
  },
  {
    id: 2,
    question: "¿Puedo cambiar de plan después?",
    answer: "Sí. Puedes elegir otro plan según tus necesidades. En una aplicación real, esta opción dependería de las condiciones de tu suscripción.",
  },
  {
    id: 3,
    question: "¿Puedo usar Focusly en mi móvil?",
    answer: "La interfaz de esta landing está diseñada para adaptarse a móviles, tablets y ordenadores. La disponibilidad de una aplicación móvil propia dependería del desarrollo del producto.",
  },
  {
    id: 4,
    question: "¿Cómo puedo organizar mis tareas?",
    answer: "Puedes agrupar tus actividades por proyectos, identificar tus prioridades y consultar tus tareas pendientes para organizar mejor tu jornada.",
  },
  {
    id: 5,
    question: "¿Para quién está pensado Focusly?",
    answer: "Focusly está pensado para estudiantes, profesionales y equipos que quieran organizar sus actividades y aprovechar mejor su tiempo.",
  },
];