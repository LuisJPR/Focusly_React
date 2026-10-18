export type Plan = {
  id: number;
  name: string;
  description: string;
  price: number;
  period: string;
  features: string[];
  buttonText: string;
  recommended: boolean;
};

export const plans: Plan[] = [
  {
    id: 1,
    name: "Gratis",
    description: "Lo esencial para organizar tu día.",
    price: 0,
    period: "para siempre",
    features: [
      "Hasta 10 tareas activas",
      "Organización de proyectos",
      "Seguimiento básico",
    ],
    buttonText: "Empezar gratis",
    recommended: false,
  },
  {
    id: 2,
    name: "Pro",
    description: "Más herramientas para alcanzar tus objetivos.",
    price: 19,
    period: "por mes",
    features: [
      "Tareas ilimitadas",
      "Proyectos ilimitados",
      "Estadísticas de productividad",
      "Seguimiento de objetivos",
      "Soporte prioritario",
    ],
    buttonText: "Elegir plan Pro",
    recommended: true,
  },
  {
    id: 3,
    name: "Equipo",
    description: "Organiza el trabajo de todo tu equipo.",
    price: 49,
    period: "por mes",
    features: [
      "Todo lo incluido en Pro",
      "Espacios de trabajo compartidos",
      "Gestión de miembros",
      "Seguimiento del equipo",
      "Soporte prioritario",
    ],
    buttonText: "Elegir plan Equipo",
    recommended: false,
  },
];