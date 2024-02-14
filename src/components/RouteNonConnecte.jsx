import { Route, Routes } from "react-router-dom";

import Connection from "../pages/Connection";
import Deconnection from "../pages/Deconnection";
import Acceuil from "../pages/Acceuil";
import Footer from "./Footer";
import Inscription from "../pages/Inscription";
import Mentionlegale from "../pages/Mentionlegale";
import Rgpd from "../pages/Rgpd";
import PrestationCategorie from "../pages/PrestationCategorie";
import NotFound from "../pages/NotFound";
import Photos from "../pages/Photos"
import Epilation from "../pages/Epilation";

function RouteNonConnecte() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/connection" element={<Connection />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/deconnection" element={<Deconnection />} />
        <Route path="/PrestationCategorie" element={<PrestationCategorie />} />
        <Route path="/mentionlegale" element={<Mentionlegale />} />
        <Route path="/rgpd" element={<Rgpd />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/categorie1" element={<Epilation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default RouteNonConnecte;
