import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] h-screen w-full items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 h-full w-full">
        <Photo
          src="/images/landing/hero.png"
          alt="Vista exterior de Cabaña La Martina"
          className="h-full w-full animate-slow-zoom object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/10" />
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-full bg-[radial-gradient(ellipse_at_20%_50%,rgba(246,239,229,0.98)_0%,rgba(246,239,229,0.93)_31%,rgba(246,239,229,0.7)_50%,rgba(246,239,229,0.2)_69%,transparent_82%)] md:w-[100%] md:bg-[radial-gradient(circle_at_5%_50%,rgba(246,239,229,0.99)_22%,rgba(246,239,229,0.94)_24%,rgba(246,239,229,0.72)_32%,rgba(246,239,229,0.18)_50%,transparent_100%)]"
        />
      </div>
      <div className="reveal active relative z-10 mx-auto w-full max-w-[1440px] px-6 text-left lg:px-28">
        <Icon
          name="solar:stars-minimalistic-bold-duotone"
          className="parallax-y absolute left-4 top-0 animate-float text-6xl text-primary/20 md:left-10 md:top-4"
        />
        <Icon
          name="solar:leaf-bold-duotone"
          className="parallax-y absolute bottom-0 left-[42%] animate-float-delayed text-5xl text-canvas/15"
        />
        <div className="max-w-xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-darkbase/75 md:text-sm">
            Sabanagrande, Atlántico
          </p>
          <h1 className="mb-8 font-serif text-6xl font-light italic leading-none tracking-tight text-darkbase md:text-8xl">
            Refugio de
            <br />
            Exclusividad
          </h1>
          <p className="mb-10 max-w-xl text-sm font-light leading-relaxed text-darkbase/80 md:text-lg">
            Alquiler completo y privado. Una experiencia campestre de lujo con
            diseño orgánico, rodeado de fauna exótica e instalaciones premium
            para su total descanso.
          </p>
          <div className="flex flex-col items-start gap-4 sm:flex-row">
            <a
              href="#booking"
              className="w-full rounded-full bg-primary px-10 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-secondary sm:w-auto"
            >
              Inicia tu Reserva
            </a>
            <a
              href="#tour-360"
              className="w-full rounded-full border border-darkbase/40 bg-transparent px-10 py-4 text-xs font-semibold uppercase tracking-widest text-darkbase transition-colors duration-300 hover:bg-darkbase hover:text-canvas sm:w-auto"
            >
              Ver Tour 360
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
