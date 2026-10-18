import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const footerLinks = [
  { label: "Caracteristicas", href: "#caracteristicas" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Planes y precios", href: "#precios" },
  { label: "Preguntas frecuentes", href: "#preguntas-frecuentes" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: FaLinkedin },
  { label: "Instagram", href: "https://www.instagram.com/", icon: FaInstagram },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#01010C] px-4 text-white sm:px-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Contenido principal */}
        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-2 lg:grid-cols-3 lg:py-16">
          {/* Logo y descripcion */}
          <div>
            <a href="#" className="text-2xl font-bold tracking-wide">
              Focusly <span className="text-violet-500">.</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-400">
              Organiza tus tareas, administra tu tiempo y encuentra el enfoque
              que necesitas para alcanzar tus objetivos.
            </p>
          </div>
          {/* Enlaces internos */}
          <div>
            <h2 className="text-sm font-semibold text-white">
              Explora Focusly
            </h2>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors duration-300 hover:text-violet-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Redes sociales */}
          <div>
            <h2 className="text-sm font-semibold text-white">
              Sígenos
            </h2>
            <div className="mt-4 flex gap-3">
              {socialLinks.map(({label, href, icon: Icon}) => (
                <a
                  key={label} 
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition-colors duration-300 hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-violet-400"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-500">
              Mantente al día con nuestras novedades.
            </p>
          </div>
        </div>
        {/* Franja inferior */}
        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Focusly. Todos los derechos reservados.
          </p>
          <a 
            href="#"
            className="transition-colors hover:text-violet-400"
          >
            Volver arriba ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
