import { Route, Routes } from "react-router-dom";

import ListingUtilisateur from "../pages/ListingUtilisateur";
import Connection from "../pages/Connection";
import Deconnection from "../pages/Deconnection";
import Acceuil from "../pages/Acceuil";
import Footer from "./Footer";
import Inscription from "../pages/Inscription";
import ListingPrestation from "../pages/ListingPrestation";
import DeleteUser from "../pages/DeleteUser";
import AjouterProduit from "../pages/AjouterProduit";
import Administrationprestation from "../pages/Administrationprestation";
import Mentionlegale from "../pages/Mentionlegale";
import Rgpd from "../pages/Rgpd";
import PrestationCategorie from "../pages/PrestationCategorie";
import NotFound from "../pages/NotFound";
import Photos from "../pages/Photos";
import ModifierProduit from "../pages/ModifierProduit";
import Epilation from "../pages/Epilation";
import ModifierCategorie from "../pages/ModifierCategorie";
import Administrationgalerie from "../pages/Administrationgalerie";
import Modifierphoto from "../pages/ModifierPhoto";
import Listingphoto from "../pages/Listingphoto";
import Ajouterphoto from "../pages/AjouterPhoto";
import Deleteproduit from "../pages/DeleteProduit";

function RouteConnecte() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/connection" element={<Connection />} />
        <Route path="/utilisateur" element={<ListingUtilisateur />} />
        <Route path="/listephoto" element={<Listingphoto />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/deconnection" element={<Deconnection />} />
        <Route path="/PrestationCategorie" element={<PrestationCategorie />} />
        <Route path="/prestation" element={<ListingPrestation />} />
        <Route path="/ajouterproduit" element={<AjouterProduit />} />
        <Route path="/ajouterphoto" element={<Ajouterphoto />} />
        <Route path="/supprimer/:id" element={<DeleteUser />} />
        <Route path="/supprimerproduit/:id" element={<Deleteproduit />} />
        <Route
          path="/Administrationprestation"
          element={<Administrationprestation />}
        />
        <Route path="/photos" element={<Photos />} />
        <Route path="/modifierproduit/:id" element={<ModifierProduit />} />
        <Route path="/modifiercategorie/:id" element={<ModifierCategorie />} />
        <Route path="/modifierphoto/:id" element={<Modifierphoto />} />
        <Route path="/galerie" element={<Administrationgalerie />} />
        <Route path="/categorie1" element={<Epilation />} />
        <Route path="/mentionlegale" element={<Mentionlegale />} />
        <Route path="/rgpd" element={<Rgpd />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default RouteConnecte;
