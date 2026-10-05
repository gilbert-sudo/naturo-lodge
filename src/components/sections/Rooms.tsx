"use client";

import { useEffect, useState } from "react";
import { roomSlides } from "@/data/landing";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";

const rooms = ["2 Literas", "2 Literas", "1 Cama Doble"];

export function Rooms() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setCurrent((slide) => (slide + 1) % roomSlides.length), 5000);
    return () => window.clearInterval(timer);
  }, []);

  const move = (direction: number) => setCurrent((slide) => (slide + direction + roomSlides.length) % roomSlides.length);

  return (
    <section id="rooms" className="relative overflow-hidden bg-darkbase py-24 text-white md:py-32">
      <div className="parallax-y absolute -left-20 top-10 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <div className="group reveal relative h-[400px] overflow-hidden rounded-2xl lg:h-[600px]" aria-roledescription="carousel" aria-label="Fotos de las habitaciones">
          {roomSlides.map((slide, index) => (
            <Photo key={slide.alt} src={slide.image} alt={slide.alt} className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${index === current ? "z-10 opacity-100" : "z-0 opacity-0"}`} />
          ))}
          <div className="pointer-events-none absolute inset-0 z-20 bg-darkbase/20" />
          <button type="button" onClick={() => move(-1)} aria-label="Foto anterior" className="absolute left-4 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-sm transition hover:bg-primary group-hover:opacity-100 focus-visible:opacity-100"><Icon name="solar:alt-arrow-left-linear" className="text-xl" /></button>
          <button type="button" onClick={() => move(1)} aria-label="Foto siguiente" className="absolute right-4 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-sm transition hover:bg-primary group-hover:opacity-100 focus-visible:opacity-100"><Icon name="solar:alt-arrow-right-linear" className="text-xl" /></button>
          <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-2">
            {roomSlides.map((slide, index) => <button type="button" key={slide.alt} onClick={() => setCurrent(index)} aria-label={`Ver ${slide.alt}`} aria-current={index === current} className={`h-2 rounded-full transition-all ${index === current ? "w-6 bg-white" : "w-2 bg-white/50"}`} />)}
          </div>
        </div>
        <div className="reveal">
          <h2 className="mb-8 font-serif text-4xl font-light italic tracking-tight md:text-5xl">Distribución de Habitaciones</h2>
          <p className="mb-12 text-sm text-white/70 md:text-base">La cabaña cuenta con 3 habitaciones independientes, configuradas para garantizar el máximo confort. Cada espacio asegura climatización y servicios privados.</p>
          <div className="space-y-8">
            {rooms.map((beds, index) => <div key={index} className="flex items-end justify-between border-b border-white/10 pb-6">
              <div><h3 className="mb-2 font-serif text-2xl italic">Habitación {index + 1}</h3><p className="text-xs uppercase tracking-widest text-muted">{beds}</p></div>
              <div className="flex gap-2 text-primary"><Icon name="solar:bath-linear" className="text-xl" title="Baño Privado" /><Icon name="solar:wind-linear" className="text-xl" title="Aire Acondicionado" /><Icon name="solar:tv-linear" className="text-xl" title="TV" /></div>
            </div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
