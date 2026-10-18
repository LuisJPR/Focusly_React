import { ClipboardList, Clock3, ChartNoAxesCombined, type LucideIcon } from "lucide-react";

type Feature = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const features: Feature[] = [
  {
    id: 1,
    title: "Organiza tus tareas",
    description: "Centraliza tus pendientes y organiza tus actividades en un solo lugar.",
    icon: ClipboardList,
  },
  {
    id: 2,
    title: "Administra tu tiempo",
    description: "Planifica tu jornada y dedica tiempo a las tareas que realmente importan.",
    icon: Clock3,
  },
  {
    id: 3,
    title: "Mide tu progreso",
    description: "Visualiza tus avances y mantén el enfoque en tus objetivos.",
    icon: ChartNoAxesCombined,
  },
];
