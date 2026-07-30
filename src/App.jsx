import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import RouteLine from "./components/RouteLine";
import ScrollManager from "./components/ScrollManager";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ExperiencesPage from "./pages/ExperiencesPage";
import PackagesPage from "./pages/PackagesPage";
import PartnersPage from "./pages/PartnersPage";
import WhyChoosePage from "./pages/WhyChoosePage";
import GuestsPage from "./pages/GuestsPage";
import SeasonsPage from "./pages/SeasonsPage";
import CulturePage from "./pages/CulturePage";
import PracticalPage from "./pages/PracticalPage";
import CorporatePage from "./pages/CorporatePage";

export default function App() {
  return (
    <div className="relative">
      <ScrollManager />
      <Nav />
      <RouteLine />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/why-choose-us" element={<WhyChoosePage />} />
          <Route path="/guests" element={<GuestsPage />} />
          <Route path="/seasons" element={<SeasonsPage />} />
          <Route path="/culture" element={<CulturePage />} />
          <Route path="/practical" element={<PracticalPage />} />
          <Route path="/corporate" element={<CorporatePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
