import { Icon } from "@/components/ui/Icon";

const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15674.316499899327!2d-74.7570415!3d10.7963365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42c5545a90987%3A0xc069deef4f1db1f3!2sSabanagrande%2C%20Atl%C3%A1ntico!5e0!3m2!1sen!2sco!4v1700000000000!5m2!1sen!2sco";

export function Location() {
  return (
    <section id="location" className="relative overflow-hidden bg-darkbase py-24 text-white md:py-32">
      <div className="absolute right-24 top-20 micro-dot animate-drift-x" />
      <div className="absolute bottom-24 right-24 micro-dot animate-drift-x-rev" style={{ animationDelay: "-7s" }} />
      <div className="reveal relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 lg:gap-16 lg:px-12">
        <div><div className="mb-8 h-px w-16 bg-primary" /><h2 className="mb-6 font-serif text-4xl font-light italic tracking-tight md:text-5xl">Ubicación Estratégica</h2><p className="mb-8 text-sm text-white/70 md:text-base">Sabanagrande, Atlántico. Un escape orgánico y privado, a minutos del entorno urbano. Rutas de acceso pavimentadas y seguras para todo tipo de vehículos.</p>
          <ul className="mb-10 space-y-4 text-sm text-white/70"><li className="flex items-start gap-3"><Icon name="solar:map-point-linear" className="mt-0.5 shrink-0 text-xl text-secondary" />Vía Oriental, Sabanagrande, Atlántico</li><li className="flex items-start gap-3"><Icon name="solar:routing-2-linear" className="mt-0.5 shrink-0 text-xl text-secondary" />A 30 minutos de Barranquilla</li><li className="flex items-start gap-3"><Icon name="solar:car-linear" className="mt-0.5 shrink-0 text-xl text-secondary" />Parqueadero privado interno (9 cupos)</li></ul>
          <a href="https://maps.google.com/?q=Sabanagrande,+Atl%C3%A1ntico" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-darkbase">Abrir en Google Maps<Icon name="solar:map-arrow-up-linear" className="text-lg" /></a>
        </div>
        <div className="relative h-[350px] w-full overflow-hidden rounded-2xl shadow-2xl md:h-[450px]"><iframe src={mapUrl} title="Mapa de Sabanagrande, Atlántico" width="100%" height="100%" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0 h-full w-full contrast-125 grayscale opacity-80 transition-all duration-700 hover:grayscale-0 hover:opacity-100" /></div>
      </div>
    </section>
  );
}
