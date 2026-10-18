import Button from "./Button";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[#09090F] text-white">
      {/* Contenedor principal */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 md:px-8 lg:grid-cols-2 lg:gap-16 lg:py-28">
        {/* Columna izquierda: contenido */}
        <div className="flex flex-col items-start">
          <span className="mb-6 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-xs font-semibold tracking-widest text-violet-300 uppercase">
            Productividad Inteligente
          </span>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Organiza tu trabajo
            <span className="block bg-linear-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
              Encuentra tu enfoque
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            Gestiona tus tareas, organiza tus ideas y alcanza tus objetivos con
            una experiencia diseñada para ayudarte a concentrarte en lo que
            realmente importa.
          </p>
          {/* Botones */}
          <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Button 
              label="Comenzar gratis" 
              href="#precios" 
            />

            <Button
              label="Explorar características"
              href="#caracteristicas"
              variant="secondary"
            />
          </div>

          <p className="mt-5 text-sm text-gray-500">
            Organiza mejor tu tiempo. Concéntrate en lo importante.
          </p>
        </div>

        {/* Columna derecha: vista previa */}
        <div className="relative flex items-center justify-center">
          {/* Resplandor decorativo */}
          <div className="absolute h-64 w-64 rounded-full bg-violet-600/20 blur-3xl sm:h-80 sm:w-80"></div>
          {/* Tarjeta de vista previa */}
          <div className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-[#11111B] p-5 shadow-2xl shadow-violet-950/20 sm:p-7">
            {/* Titulos */}
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-sm text-gray-400">Tu espacio de trabajo</p>
                <h2 className="mt-1 text-xl font-semibold">Mi productividad</h2>
              </div>
              <span className="rounded-lg bg-violet-500/15 px-3 py-2 text-xs font-medium text-violet-300">
                Mi espacio
              </span>
            </div>
            {/* Resumen de tareas */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/5 bg-white/3 p-4">
                <p className="text-sm text-gray-400">Tareas pendientes</p>
                <p className="mt-3 text-3xl font-bold">08</p>
                <p className="mt-2 text-xs text-violet-300">Sigue avanzando</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/3 p-4">
                <p className="text-sm text-gray-400">Tareas completadas</p>
                <p className="mt-3 text-3xl font-bold">24</p>
                <p className="mt-2 text-xs text-violet-300">¡Buen trabajo!</p>
              </div>
            </div>
            {/* Lista visual de tareas */}
            <div className="mt-6 space-y-4">
              <p className="text-sm font-semibold text-gray-300">
                Próximas tareas
              </p>
              <div className="flex items-center gap-3 rounded-lg bg-white/3 p-3">
                <span className="h-4 w-4 rounded border border-violet-400"></span>
                <span className="flex-1 text-sm text-gray-300">
                  Planificar semana
                </span>
                <span className="text-xs text-gray-500">Hoy</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-white/3 p-3">
                <span className="h-4 w-4 rounded border border-violet-400"></span>
                <span className="flex-1 text-sm text-gray-300">
                  Revisar mis objetivos
                </span>
                <span className="text-xs text-gray-500">Mañana</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-white/3 p-3">
                <span className="flex h-4 w-4 items-center justify-center rounded border border-violet-400">
                  ✓
                </span>
                <span className="flex-1 text-sm text-gray-300">
                  Organizar mis prioridades
                </span>
                <span className="text-xs text-gray-500">Listo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
