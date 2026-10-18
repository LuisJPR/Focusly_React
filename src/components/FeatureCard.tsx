import { type LucideIcon } from "lucide-react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function FeatureCard({
  title,
  description,
  icon: Icon,
}: FeatureCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-[#11111B] p-6 transition-colors duration-300 hover:border-violet-500/50">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
        <Icon size={24} strokeWidth={1.8} />
      </div>
      <h3 className="mb-3 text-xl font-semibold text-white">
        {title}
      </h3>
      <p className="leading-7 text-gray-400">
        {description}
      </p>
    </article>
  );
}
