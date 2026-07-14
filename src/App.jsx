import Nav from "./components/Nav";
import RouteLine from "./components/RouteLine";
import Hero from "./components/Hero";
import ValueProps from "./components/ValueProps";
import Experiences from "./components/Experiences";
import Packages from "./components/Packages";
import Partners from "./components/Partners";
import WhyChoose from "./components/WhyChoose";
import Guests from "./components/Guests";
import Seasons from "./components/Seasons";
import Culture from "./components/Culture";
import Practical from "./components/Practical";
import Corporate from "./components/Corporate";
import FAQ from "./components/FAQ";
import PlanCTA from "./components/PlanCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative">
      <Nav />
      <RouteLine />
      <main>
        <Hero />
        <ValueProps />
        <Experiences />
        <Packages />
        <Partners />
        <WhyChoose />
        <Guests />
        <Seasons />
        <Culture />
        <Practical />
        <Corporate />
        <FAQ />
        <PlanCTA />
      </main>
      <Footer />
    </div>
  );
}
