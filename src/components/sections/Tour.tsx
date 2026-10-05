import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";

export function Tour() {
  return (
    <section id="tour-360" className="relative bg-darkbase py-24 text-white md:py-32">
      <div className="reveal mx-auto max-w-[1440px] px-6 text-center lg:px-12">
        <h2 className="mb-4 font-serif text-4xl font-light italic tracking-tight md:text-5xl">Tour 360°</h2>
        <p className="mx-auto mb-12 max-w-2xl text-sm text-white/70 md:text-base">Explora cada rincón de Cabaña La Martina de manera interactiva. Un recorrido inmersivo por nuestras instalaciones antes de tu visita.</p>
        <div className="group relative mx-auto aspect-video w-full max-w-4xl cursor-pointer overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
          <Photo src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" alt="Vista 360" className="absolute inset-0 h-full w-full animate-slow-zoom object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-colors duration-300 group-hover:bg-black/20"><div className="pointer-events-none absolute h-32 w-32 animate-[spin_10s_linear_infinite] rounded-full border border-dashed border-white/20" /><span className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform duration-300 group-hover:scale-110"><Icon name="solar:play-circle-bold-duotone" className="text-5xl" /></span></div>
          <div className="absolute bottom-4 left-4 rounded-full bg-black/60 px-4 py-2 text-xs uppercase tracking-widest backdrop-blur-md md:bottom-6 md:left-6"><span className="flex items-center gap-2"><Icon name="solar:panorama-linear" className="text-lg" />Iniciar Recorrido</span></div>
        </div>
        <div className="mt-10"><button type="button" className="rounded-full bg-primary px-10 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-secondary">Explorar Tour Interactivo</button></div>
      </div>
    </section>
  );
}
