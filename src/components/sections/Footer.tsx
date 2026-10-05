import { Icon } from "@/components/ui/Icon";

export function Footer() {
  return (
    <footer className="bg-darkbase pb-10 pt-20 text-white">
      <div className="mx-auto mb-16 grid max-w-[1440px] grid-cols-1 gap-12 px-6 md:grid-cols-4 lg:px-12">
        <div className="md:col-span-2"><h2 className="mb-4 font-serif text-4xl italic text-canvas">La Martina</h2><p className="mb-6 max-w-sm text-sm text-white/60">Lujo exclusivo y contacto orgánico con la naturaleza en Sabanagrande, Atlántico. Tu refugio privado.</p><a href="https://www.instagram.com/cabana_la_martina/" target="_blank" rel="noopener noreferrer" aria-label="Instagram La Martina" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all hover:border-primary hover:bg-primary"><Icon name="solar:camera-linear" className="text-lg" /></a></div>
        <div><h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-primary">Contacto</h3><ul className="space-y-4 text-sm text-white/70"><li><a href="tel:+573015780509" className="transition-colors hover:text-canvas">+57 301 578 0509</a></li><li><a href="mailto:info.lamartina.co@gmail.com" className="transition-colors hover:text-canvas">info.lamartina.co@gmail.com</a></li><li className="mt-6 text-xs uppercase tracking-widest">Sabanagrande, Atlántico<br />Colombia</li></ul></div>
        <div><h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-primary">Legal</h3><ul className="space-y-4 text-sm text-white/70"><li>Políticas de Cancelación</li><li>Reglamento de Penalizaciones</li><li>Términos de Privacidad</li></ul></div>
      </div>
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between border-t border-white/10 px-6 pt-8 text-center text-xs uppercase tracking-widest text-white/40 md:flex-row md:text-left lg:px-12"><p>© {new Date().getFullYear()} Cabaña La Martina. Todos los derechos reservados.</p><p className="mt-4 md:mt-0">Diseñado bajo ecosistema natural</p></div>
    </footer>
  );
}
