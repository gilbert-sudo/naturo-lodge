import { wildlife } from "@/data/landing";
import { Photo } from "@/components/ui/Photo";

export function Fauna() {
  return (
    <section id="fauna" className="relative overflow-hidden py-24 md:py-32">
      <div className="parallax-y absolute -right-16 top-16 h-72 w-72 rounded-full bg-secondary/5 blur-3xl" />
      <div className="absolute right-16 top-20 micro-dot animate-drift-x" />
      <div className="relative mx-auto mb-12 max-w-[1440px] px-6 lg:px-12">
        <h2 className="reveal mb-4 font-serif text-4xl font-light italic tracking-tight text-darkbase md:text-5xl">Nuestra Fauna</h2>
        <p className="reveal max-w-2xl text-sm text-darkbase/80 md:text-base">Convive con especies exóticas y de granja en un entorno controlado y seguro. Un contacto directo y responsable con la naturaleza.</p>
      </div>
      <div className="hide-scrollbar reveal flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-12 md:gap-8 lg:px-[15vw]">
        {wildlife.map((animal) => <article key={animal.name} className="group relative h-[400px] w-[90vw] shrink-0 snap-center overflow-hidden rounded-3xl shadow-xl md:h-[600px] md:w-[70vw]">
          <Photo src={animal.image} alt={animal.name} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12"><h3 className="mb-2 font-serif text-3xl font-light italic tracking-tight text-white md:text-5xl">{animal.name}</h3><p className="text-xs font-medium uppercase tracking-widest text-white/80 md:text-sm">{animal.caption}</p></div>
        </article>)}
      </div>
    </section>
  );
}
