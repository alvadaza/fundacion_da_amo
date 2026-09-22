import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import Hero from "../components/Hero/Hero";
import QuienesSomos from "../components/QuienesSomos/QuienesSomos";
import SeccionClubDeportivo from "../components/SeccionClubDeportivo/SeccionClubDeportivo";
import SeccionComedores from "../components/SeccionComedores/SeccionComedores";
import SeccionEducacion from "../components/SeccionEducacion/SeccionEducacion";
import Footer from "../components/Footer/Footer";
import MisionVision from "../Pages/MisionVisionPage/MisionVisionPage";
import ComedoresPage from "../Pages/ComedoresPage/ComedoresPage";
import ClubDeportivo from "../Pages/ClubDeportivo/ClubDeportivo";
import Educacion from "../Pages/Educacion/Educacion";
import ContactoPage from "../Pages/ContactoPage/ContactoPage";
import DonacionesPage from "../Pages/Donaciones/Donaciones";

import "../styles/variables.css";

function Inicio() {
  return (
    <>
      <HeroSlider />
      <Hero />

      <div className="stack-card section-quienes">
        <QuienesSomos />
      </div>

      <div className="stack-card section-deporte">
        <SeccionClubDeportivo />
      </div>

      <div className="stack-card section-comedores">
        <SeccionComedores />
      </div>

      <SeccionEducacion />

      <footer className="footer-normal-flow">
        <Footer />
      </footer>
    </>
  );
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <div className="fundamor-app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/mision-vision" element={<MisionVision />} />
          <Route path="/comedores" element={<ComedoresPage />} />
          <Route path="/club-deportivo" element={<ClubDeportivo />} />
          <Route path="/educacion" element={<Educacion />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/donaciones" element={<DonacionesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
