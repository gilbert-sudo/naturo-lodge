export type AmenityItem = {
  icon: string;
  label: string;
};

export type AmenityGroup = {
  title: string;
  image: string;
  imageAlt: string;
  items: AmenityItem[];
};

export type WildlifeItem = {
  name: string;
  caption: string;
  image: string;
};

export type BookingPlan = "pasadia" | "alojamiento";

export type BookingPlanDetails = {
  name: string;
  maxPeople: number;
  price: string;
};
