import { Icon } from "@/components/ui/Icon";

const rules = [
  { icon: "solar:volume-cross-linear", title: "Sonido Externo Prohibido", text: "Estrictamente prohibido el uso de bafles o amplificadores externos. Debe usarse el sonido integrado." },
  { icon: "solar:danger-circle-linear", title: "Horario y Seguridad en Piscina", text: "Uso permitido hasta las 10:00 PM. Prohibido ingresar envases o vasos de vidrio en la zona perimetral." },
  { icon: "solar:forbidden-circle-linear", title: "Zonas de No Fumar", text: "Prohibido fumar tabaco o cigarrillos electrónicos en el interior de la casa y todo el Kiosco." },
];

export function Rules() {
  return (
    <section id="rules" className="relative overflow-hidden py-24 text-white md:py-32">
      <div className="absolute inset-0 bg-darkbase" />
      <div className="absolute inset-0 bg-[url('https://cdn.prod.website-files.com/6710d1b2bc82a2f6d06f926d/6731d7c63fc5a7e0fdf13552_Starry%20Background.webp')] bg-cover bg-center opacity-20" />
      <div className="relative z-10 mx-auto grid max-w-[1440px] grid-cols-1 gap-16 px-6 md:grid-cols-2 lg:gap-24 lg:px-12">
        <div className="reveal"><div className="mb-8 h-px w-16 bg-secondary" /><h2 className="mb-6 font-serif text-4xl font-light italic">Reglas de Convivencia</h2><p className="mb-8 text-sm text-white/70">Para mantener la integridad acústica y la armonía del ecosistema, establecemos regulaciones estrictas.</p>
          <ul className="space-y-6 text-sm">{rules.map((rule) => <li key={rule.title} className="flex items-start gap-4"><Icon name={rule.icon} className="shrink-0 text-2xl text-secondary" /><div><strong className="mb-1 block text-xs font-semibold uppercase tracking-wide">{rule.title}</strong><span className="text-white/70">{rule.text}</span></div></li>)}</ul>
        </div>
        <div className="reveal"><div className="mb-8 h-px w-16 bg-primary" /><h2 className="mb-6 font-serif text-4xl font-light italic">Interacción con la Fauna</h2><p className="mb-8 text-sm text-white/70">Nuestro predio es hogar de avestruces, llamas, venados, caballos, pavos reales y más. Protegemos su dieta activamente.</p>
          <div className="rounded-2xl border border-white/10 bg-darkbase/50 p-6"><div className="mb-4 flex items-start gap-4"><Icon name="solar:hand-stars-linear" className="shrink-0 text-2xl text-primary" /><div><strong className="mb-1 block text-xs font-semibold uppercase tracking-wide">Alimentación Controlada</strong><span className="text-sm text-white/70">Prohibido suministrar comida externa a los animales. Las interacciones se realizan exclusivamente mediante la compra de kits de comida controlados internamente.</span></div></div><div className="mt-4 border-t border-white/10 pt-4 text-xs uppercase tracking-widest text-white/50">Permitido alimentar con kit únicamente: Llamas, Avestruces y Guacamayas.</div></div>
        </div>
      </div>
    </section>
  );
}
