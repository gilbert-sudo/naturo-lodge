import { MotionEffects } from "@/components/MotionEffects";
import { Amenities } from "@/components/sections/Amenities";
import { Booking } from "@/components/sections/Booking";
import { Fauna } from "@/components/sections/Fauna";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Location } from "@/components/sections/Location";
import { Pricing } from "@/components/sections/Pricing";
import { Rooms } from "@/components/sections/Rooms";
import { Rules } from "@/components/sections/Rules";
import { Tour } from "@/components/sections/Tour";

export default function HomePage() {
  return (
    <>
      <MotionEffects />
      <Header />
      <main>
        <Hero />
        <Amenities />
        <Rooms />
        <Fauna />
        <Pricing />
        <Rules />
        <Tour />
        <Booking />
        <Location />
      </main>
      <Footer />
    </>
  );
}
