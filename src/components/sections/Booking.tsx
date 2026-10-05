"use client";

import { useState, type FormEvent } from "react";
import { bookingPlans } from "@/data/landing";
import type { BookingPlan } from "@/types/landing";
import { Icon } from "@/components/ui/Icon";

type ContactDetails = { name: string; date: string; people: string };

export function Booking() {
  const [plan, setPlan] = useState<BookingPlan | null>(null);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [contact, setContact] = useState<ContactDetails>({ name: "", date: "", people: "" });
  const [error, setError] = useState("");

  const choosePlan = (selected: BookingPlan) => {
    setPlan(selected);
    setStep(2);
    setError("");
  };

  const verify = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!plan) return;
    const people = Number(contact.people);
    if (!contact.name.trim() || !contact.date || !people) {
      setError("Por favor completa todos los campos.");
      return;
    }
    if (people > bookingPlans[plan].maxPeople) {
      setError(`El plan seleccionado tiene un límite máximo de ${bookingPlans[plan].maxPeople} personas.`);
      return;
    }
    if (people < 1) {
      setError("La cantidad de personas debe ser al menos 1.");
      return;
    }
    setError("");
    setStep(3);
  };

  const sendToWhatsApp = () => {
    if (!plan) return;
    const details = bookingPlans[plan];
    const message = `Hola Cabaña La Martina, quiero confirmar disponibilidad para una reserva:\n\n*Plan:* ${details.name}\n*Nombre de Contacto:* ${contact.name.trim()}\n*Fecha Solicitada:* ${contact.date}\n*Cantidad de Personas:* ${contact.people}\n*Tarifa Esperada:* ${details.price}\n\nQuedo atento(a) para proceder con el anticipo.`;
    window.open(`https://wa.me/573015780509?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="booking" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute left-14 top-20 micro-dot animate-drift-x" />
      <div className="absolute bottom-20 right-14 micro-dot animate-drift-x-rev" />
      <div className="reveal mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm md:p-12">
        <h2 className="mb-2 text-center font-serif text-4xl font-light italic">Solicitud de Reserva</h2>
        <p className="mb-12 text-center text-xs font-semibold uppercase tracking-widest text-primary">Proceso en 3 pasos</p>

        {step === 1 && <div>
          <h3 className="mb-6 text-center text-lg font-semibold">Paso 1: Seleccione su Plan</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {(["pasadia", "alojamiento"] as const).map((key) => <button type="button" key={key} onClick={() => choosePlan(key)} className="rounded-2xl border border-darkbase/20 p-6 text-left transition-colors hover:border-primary hover:bg-canvas/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500">
              <h4 className="mb-2 font-serif text-2xl italic text-darkbase">{key === "pasadia" ? "Pasadía Diurno" : "Alojamiento"}</h4>
              <p className="text-sm text-darkbase/60">{key === "pasadia" ? "Tarifa plana para hasta 20 personas." : "Privacidad total hasta 14 personas."}</p>
            </button>)}
          </div>
        </div>}

        {step === 2 && plan && <form onSubmit={verify}>
          <div className="mb-6 flex items-center justify-between gap-4"><h3 className="text-lg font-semibold">Paso 2: Datos del Grupo</h3><button type="button" onClick={() => setStep(1)} className="text-xs uppercase tracking-widest text-muted hover:text-darkbase">← Cambiar Plan</button></div>
          <p className="mb-8 inline-block rounded-lg bg-primary/5 p-4 text-xs font-semibold uppercase tracking-widest text-primary">Disponibilidad garantizada en tiempo real al contactar.</p>
          <div className="space-y-6">
            <div><label htmlFor="contact-name" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-darkbase/80">Nombre Completo</label><input id="contact-name" type="text" autoComplete="name" value={contact.name} onChange={(event) => setContact({ ...contact, name: event.target.value })} placeholder="Ingresa tu nombre" className="w-full py-3 text-sm" /></div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div><label htmlFor="contact-date" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-darkbase/80">Fecha Solicitada</label><input id="contact-date" type="date" value={contact.date} onChange={(event) => setContact({ ...contact, date: event.target.value })} className="w-full py-3 text-sm" /></div>
              <div><label htmlFor="contact-people" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-darkbase/80">Cantidad de Personas <span className="text-muted">(Máx {bookingPlans[plan].maxPeople})</span></label><input id="contact-people" type="number" min="1" max={bookingPlans[plan].maxPeople} value={contact.people} onChange={(event) => setContact({ ...contact, people: event.target.value })} placeholder="0" className="w-full py-3 text-sm" /></div>
            </div>
            {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
            <button type="submit" className="mt-6 w-full rounded-full bg-darkbase px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-primary">Continuar a Verificación</button>
          </div>
        </form>}

        {step === 3 && plan && <div>
          <h3 className="mb-6 text-lg font-semibold">Paso 3: Verificación y Resumen</h3>
          <div className="mb-8 space-y-4 rounded-2xl bg-canvas p-6">
            <div className="flex items-end justify-between border-b border-darkbase/10 pb-4"><div><p className="mb-1 text-xs uppercase tracking-widest text-darkbase/60">Plan Seleccionado</p><p className="font-serif text-2xl italic">{bookingPlans[plan].name}</p></div><button type="button" onClick={() => setStep(1)} className="text-xs text-primary underline">Modificar</button></div>
            <div className="flex items-end justify-between border-b border-darkbase/10 pb-4"><div><p className="mb-1 text-xs uppercase tracking-widest text-darkbase/60">Contacto y Fecha</p><p className="text-sm font-semibold">{contact.name.trim()}<br /><span className="text-xs text-darkbase/60">{contact.people} Personas | Fecha: {contact.date}</span></p></div><button type="button" onClick={() => setStep(2)} className="text-xs text-primary underline">Modificar</button></div>
            <div className="flex items-end justify-between pt-2"><div><p className="mb-1 text-xs uppercase tracking-widest text-darkbase/60">Tarifa Plana Total</p><p className="text-2xl font-light tracking-tight text-primary">{bookingPlans[plan].price}</p></div></div>
          </div>
          <div className="mb-8 rounded-lg bg-secondary/10 p-4 text-xs text-darkbase/80"><strong className="mb-1 block uppercase tracking-widest text-secondary">Nota Importante</strong>Se requiere un depósito de garantía de $300.000 COP antes del ingreso, reembolsable tras inventario. El cierre se realiza vía WhatsApp.</div>
          <button type="button" onClick={sendToWhatsApp} className="flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-[#128C7E]"><Icon name="solar:phone-calling-linear" className="text-lg" />Confirmar y Enviar a WhatsApp</button>
        </div>}
      </div>
    </section>
  );
}
