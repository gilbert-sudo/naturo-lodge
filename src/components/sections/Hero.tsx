import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[600px] h-screen w-full items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 h-full w-full">
        <Photo src="https://cdn.prod.website-files.com/6710d1b2bc82a2f6d06f926d/67287418d258ac034b0468b9_Lodge.webp" alt="Vista exterior de Cabaña La Martina" className="h-full w-full animate-slow-zoom object-cover" loading="eager" />
        <div className="dark-overlay absolute inset-0" />
      </div>
      <div className="reveal active relative z-10 mx-auto max-w-4xl px-4 text-center">
        <Icon name="solar:stars-minimalistic-bold-duotone" className="parallax-y absolute -left-10 -top-12 animate-float text-6xl text-white/30 md:-top-20" />
        <Icon name="solar:leaf-bold-duotone" className="parallax-y absolute bottom-0 -right-12 animate-float-delayed text-5xl text-white/20" />
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-white md:text-sm">Sabanagrande, Atlántico</p>
        <h1 className="mb-8 font-serif text-6xl font-light italic leading-none tracking-tight text-white md:text-8xl">Refugio de<br />Exclusividad</h1>
        <p className="mx-auto mb-10 max-w-2xl text-sm font-light text-white/90 md:text-lg">
          Alquiler completo y privado. Una experiencia campestre de lujo con diseño orgánico, rodeado de fauna exótica e instalaciones premium para su total descanso.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#booking" className="w-full rounded-full bg-primary px-10 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-secondary sm:w-auto">Inicia tu Reserva</a>
          <a href="#tour-360" className="w-full rounded-full border border-white bg-transparent px-10 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-white hover:text-darkbase sm:w-auto">Ver Tour 360</a>
        </div>
      </div>
    </section>
  );
}
