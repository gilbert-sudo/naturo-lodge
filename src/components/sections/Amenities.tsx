import { amenityGroups } from "@/data/landing";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Amenities() {
  return (
    <section id="amenities" className="relative overflow-hidden py-24 md:py-32">
      <div className="parallax-y absolute -right-10 top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute left-10 top-44 micro-dot animate-drift-x" />
      <div className="absolute bottom-28 right-16 micro-dot animate-drift-x-rev" style={{ animationDelay: "-6s" }} />
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
        <SectionHeading title="Catálogo de Amenidades" description="Diseñado bajo un ecosistema de privacidad absoluta. Nuestras instalaciones combinan recreación al aire libre con confort doméstico contemporáneo." centered />
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {amenityGroups.map((group, index) => (
            <article className="reveal" style={{ transitionDelay: `${index * 100}ms` }} key={group.title}>
              <Photo src={group.image} alt={group.imageAlt} className="mb-6 aspect-video w-full rounded-xl object-cover shadow-sm transition-transform duration-500 hover:scale-[1.02]" />
              <div className="mb-8 h-px w-full bg-darkbase/10" />
              <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-primary">{group.title}</h3>
              <ul className="space-y-4 text-sm text-darkbase/80">
                {group.items.map((item) => <li className="flex items-start gap-3" key={item.label}><Icon name={item.icon} className="mt-0.5 text-xl text-secondary" />{item.label}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
