type ButtonProps = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  className?: string;
};

export default function Button({
  label,
  href,
  variant = "primary",
  size = "md",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg text-center font-semibold transition-colors duration-300";

  const variants = {
    primary: "bg-violet-600 text-white hover:bg-violet-700",
    secondary: "border border-white/15 text-gray-200 hover:border-violet-400 hover:text-violet-300",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-6 py-3 text-sm",
  };

  return (
    <a
      href={href}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {label}
    </a>
  );
}
