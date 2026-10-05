export function Header() {
  return (
    <header className="fixed top-0 z-50 flex h-20 w-full items-center bg-darkbase/10 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 lg:px-12">
        <a
          href="#home"
          className="font-serif text-xl italic tracking-tight text-white md:text-2xl"
        >
          <img
            src="/images/landing/logo.png"
            alt="Logo de naturo lodge"
            className="w-37.5"
          />
        </a>
        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-widest text-white md:flex"
        >
          <a
            href="#amenities"
            className="transition-colors duration-300 hover:text-secondary"
          >
            Amenidades
          </a>
          <a
            href="#rooms"
            className="transition-colors duration-300 hover:text-secondary"
          >
            Habitaciones
          </a>
          <a
            href="#pricing"
            className="transition-colors duration-300 hover:text-secondary"
          >
            Tarifas
          </a>
          <a
            href="#rules"
            className="transition-colors duration-300 hover:text-secondary"
          >
            Convivencia
          </a>
        </nav>
        <a
          href="#booking"
          className="rounded-full bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-secondary"
        >
          Reservar
        </a>
      </div>
    </header>
  );
}
