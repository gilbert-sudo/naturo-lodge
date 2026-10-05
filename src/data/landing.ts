import type { AmenityGroup, BookingPlanDetails, WildlifeItem } from "@/types/landing";

export const amenityGroups: AmenityGroup[] = [
  {
    title: "Recreación y Exterior",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Piscina La Martina",
    items: [
      { icon: "solar:swimming-linear", label: "Piscina Privada (12m x 4m)" },
      { icon: "solar:bath-linear", label: "Jacuzzi integrado" },
      { icon: "solar:football-linear", label: "Cancha de Fútbol privada" },
      { icon: "solar:home-smile-linear", label: "Kiosco Tradicional cubierto" },
      { icon: "solar:leaf-linear", label: "Amplias Zonas Verdes y Caballeriza" },
    ],
  },
  {
    title: "Confort Interior",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Cabaña Interior",
    items: [
      { icon: "solar:wind-linear", label: "Aire Acondicionado integral" },
      { icon: "solar:chef-hat-linear", label: "Cocina Integral equipada" },
      { icon: "solar:tv-linear", label: "Televisores distribuidos" },
      { icon: "solar:wifi-router-linear", label: "Conectividad Wifi de alta velocidad" },
    ],
  },
  {
    title: "Servicios Ecosistémicos",
    image: "https://images.unsplash.com/photo-1563396983906-f3715f1f2e11?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Avestruces y Fauna",
    items: [
      { icon: "solar:music-note-linear", label: "Sistema de Sonido propio (Controlado)" },
      { icon: "solar:cat-linear", label: "Mascotas Permitidas (Pet-Friendly)" },
      { icon: "solar:car-linear", label: "Parqueadero Privado (Máx 9 vehículos)" },
    ],
  },
];

export const wildlife: WildlifeItem[] = [
  { name: "Avestruces", caption: "Interacción Permitida", image: "https://images.unsplash.com/photo-1563396983906-f3715f1f2e11?q=80&w=1200&auto=format&fit=crop" },
  { name: "Llamas y Alpacas", caption: "Interacción Permitida", image: "https://images.unsplash.com/photo-1568160455018-09cd34bb4859?q=80&w=1200&auto=format&fit=crop" },
  { name: "Venados Sika", caption: "Avistamiento en manada", image: "https://images.unsplash.com/photo-1502422791888-29bf42907409?q=80&w=1200&auto=format&fit=crop" },
  { name: "Caballos Percherones", caption: "Zona Ecuestre", image: "https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=1200&auto=format&fit=crop" },
  { name: "Pavos Reales", caption: "Aves Exóticas", image: "https://images.unsplash.com/photo-1515594854536-cb7db353b3f4?q=80&w=1200&auto=format&fit=crop" },
  { name: "Granja Interactiva", caption: "Ovejas, Cabras y más", image: "https://images.unsplash.com/photo-1484557985045-edf25e08da73?q=80&w=1200&auto=format&fit=crop" },
];

export const bookingPlans: Record<"pasadia" | "alojamiento", BookingPlanDetails> = {
  pasadia: { name: "Pasadía Diurno", maxPeople: 20, price: "$1.200.000 COP" },
  alojamiento: { name: "Alojamiento Completo", maxPeople: 14, price: "$3.000.000 COP" },
};

export const roomSlides = [
  { image: "https://cdn.prod.website-files.com/6710d1b2bc82a2f6d06f926d/672874bd3b68ae7b587f264d_Lodge%202.webp", alt: "Habitación 1" },
  { image: "https://images.unsplash.com/photo-1598928506311-c55d430bfc23?q=80&w=800&auto=format&fit=crop", alt: "Habitación 2" },
  { image: "https://images.unsplash.com/photo-1560067174-c5a3a8f37060?q=80&w=800&auto=format&fit=crop", alt: "Habitación 3" },
];
