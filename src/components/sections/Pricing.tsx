import { Icon } from "@/components/ui/Icon";

const plans = [
  {
    title: "Pasadía Diurno", people: "Máx 20 Personas", price: "$1.2M", suffix: "COP", dark: false,
    details: ["Tarifa plana asistan 1 o 20 personas.", "Acceso a todas las zonas húmedas y recreativas.", "Anticipo de reserva: 30% ($360.000 COP)."],
  },
  {
    title: "Alojamiento Completo", people: "Máx 14 Personas", price: "$3.0M", suffix: "COP / Noche", dark: true,
    details: ["Tarifa plana idéntica fines de semana y festivos.", "Exclusividad total de habitaciones y predio.", "Anticipo de reserva: $1.000.000 COP."],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-24 md:py-32">
      <div className="parallax-y absolute -left-12 top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-24 left-12 micro-dot animate-drift-x-rev" style={{ animationDelay: "-10s" }} />
      <div className="relative mx-auto max-w-[1440px] px-6 text-center lg:px-12">
        <div className="reveal mx-auto mb-16 max-w-2xl"><h2 className="mb-4 font-serif text-4xl font-light italic tracking-tight text-darkbase md:text-5xl">Tarifas Planas</h2><p className="text-sm text-darkbase/80 md:text-base">Sin variaciones de temporada. Precios fijos y cerrados por bloque de servicio, garantizando transparencia total en su reserva.</p></div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 text-left md:grid-cols-2">
          {plans.map((plan) => <article key={plan.title} className={`group reveal relative overflow-hidden rounded-2xl p-8 shadow-sm md:p-10 ${plan.dark ? "bg-darkbase text-white" : "bg-white text-darkbase"}`}>
            <div className={`absolute -right-0 -top-0 -z-0 h-32 w-32 rounded-bl-full transition-transform duration-500 group-hover:scale-110 ${plan.dark ? "bg-surface" : "bg-canvas"}`} />
            <div className="relative"><h3 className="mb-2 font-serif text-3xl italic">{plan.title}</h3><p className="mb-6 text-xs font-semibold uppercase tracking-widest text-secondary">{plan.people}</p><p className={`mb-6 font-sans text-5xl font-light tracking-tight ${plan.dark ? "text-canvas" : "text-primary"}`}>{plan.price} <span className={`text-base font-semibold uppercase tracking-widest ${plan.dark ? "text-white/60" : "text-darkbase/60"}`}>{plan.suffix}</span></p>
              <ul className={`mb-10 space-y-3 border-t pt-6 text-sm ${plan.dark ? "border-white/10 text-white/80" : "border-darkbase/10 text-darkbase/80"}`}>{plan.details.map((detail) => <li className="flex items-start gap-2" key={detail}><Icon name="solar:check-circle-linear" className={`mt-0.5 ${plan.dark ? "text-secondary" : "text-primary"}`} />{detail}</li>)}</ul>
            </div>
          </article>)}
        </div>
      </div>
    </section>
  );
}
