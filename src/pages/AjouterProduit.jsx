import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../components/Header';

function AjouterProduit() {
  const [formData, setFormData] = useState({
    titre: "",
    fichier: "",
    alt: "",
    prix: "",
    description: "",
    temps: "",
    fk_categorie: "",
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDataError, setisDataError] = useState(false);
  const navigate = useNavigate();
  const [errorValidator, setErrorValidator] = useState({
    titre: null,
    fichier: null,
    alt: null,
    prix: null,
    description: null,
    temps: null,
    fk_categorie: null,
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setErrorValidator({ ...errorValidator, [event.target.name]: null });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setIsLoading(true);
    setisDataError(false);

    //partie verification input
    // Validation des données de formulaire
    let hasError = false;
    if (!formData.titre) {
      setErrorValidator({
        ...errorValidator,
        titre: "Le titre ne peut être vide",
      });
      hasError = true;
    }
    if (!formData.fichier) {
      setErrorValidator({
        ...errorValidator,
        fichier: "Le fichier ne peut être vide",
      });
      hasError = true;
    }
    if (!formData.alt) {
      setErrorValidator({ ...errorValidator, alt: "Le alt ne peut être vide" });
      hasError = true;
    }
    if (!formData.prix) {
      setErrorValidator({
        ...errorValidator,
        prix: "Le prix ne peut être vide",
      });
      hasError = true;
    }
    if (!formData.description) {
      setErrorValidator({
        ...errorValidator,
        description: "La description ne peut être vide",
      });
      hasError = true;
    }
    if (!formData.temps) {
      setErrorValidator({
        ...errorValidator,
        temps: "Le temps ne peut être vide",
      });
      hasError = true;
    }
    if (!formData.fk_categorie) {
      setErrorValidator({
        ...errorValidator,
        fk_categorie: "La categorie ne peut être vide",
      });
      hasError = true;
    }
    function isUrl(string) {
      try {
        new URL(string);
        return true;
      } catch (_) {
        return false, setIsLoading(false);
      }
    }
    if (!isUrl(formData.fichier)) {
      setErrorValidator({
        ...errorValidator,
        fichier: "cela doit étre une url",
      });
      hasError = true;
    }
    function isDecimal(value) {
      return /^\d*\.\d+$/.test(value);
    }
    if (!isDecimal(formData.prix)) {
      setErrorValidator({
        ...errorValidator,
        prix: "Le prix doit être un nombre décimal comme 10.02",
      });
      hasError = true;
    }
    function isInt(value) {
      return !isNaN(parseInt(value));
    }
    if (!isInt(formData.temps)) {
      setErrorValidator({
        ...errorValidator,
        temps: "Le temps doit être un entier",
      });
      hasError = true;
    }
    if (!isInt(formData.fk_categorie)) {
      setErrorValidator({
        ...errorValidator,
        fk_categorie: "La categorie doit être un entier",
      });
      hasError = true;
    }

    // Si il y a des erreurs, on arrête l'exécution de la fonction
    if (hasError) {
      setIsLoading(false);
      return;
    }
    //fin de la partie

    try {
      const response = await fetch(
        "http://localhost:3000/api/produits",
        {
          method: "POST",
          headers: { "Content-Type": "application/json",
          'Authorization': `Bearer ${localStorage.getItem('jwt')}` },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      // console.log(data)
      if (data.message != "Le produit a a bien été crée.") {
        setisDataError(data.message);
      } else {
        navigate("/prestation");
      }

      // console.log(isDataError)
      if (!response.ok) {
        throw new Error(data.error);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  //
  return (
    <>
      <Header />
      <div className="bg-trait-or h-[0.5vh]"></div>
      <div className="w-full h-[80vh] flex justify-center items-center bg-cadre bg-cover md:bg-auto bg-center bg-no-repeat">
        <div className="flex-1 max-w-[400px] mx-auto border-2 rounded p-5">
          <h1 className="text-2xl text-blue-900 font-semibold mb-3">
            Ajouter un produit
          </h1>
          <form className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
            <input
              className="p-1 border rounded"
              type="text"
              name="titre"
              placeholder="Titre"
              onChange={handleChange}
              value={formData.titre}
            />
            {errorValidator.titre && (
              <p className="text-sm text-red-500">{errorValidator.titre}</p>
            )}
            <input
              className="p-1 border rounded"
              type="text"
              name="fichier"
              placeholder="fichier"
              onChange={handleChange}
              value={formData.fichier}
            />
            {errorValidator.fichier && (
              <p className="text-sm text-red-500">{errorValidator.fichier}</p>
            )}
            <input
              className="p-1 border rounded"
              type="text"
              name="alt"
              placeholder="Alt"
              onChange={handleChange}
              value={formData.alt}
            />
            {errorValidator.alt && (
              <p className="text-sm text-red-500">{errorValidator.alt}</p>
            )}
            <input
              className="p-1 border rounded"
              type="prix"
              name="prix"
              placeholder="prix"
              onChange={handleChange}
              value={formData.prix}
            />
            {errorValidator.prix && (
              <p className="text-sm text-red-500">{errorValidator.prix}</p>
            )}
            <textarea
              className="p-1 border rounded"
              name="description"
              placeholder="description"
              onChange={handleChange}
              value={formData.description}
            ></textarea>
            {errorValidator.description && (
              <p className="text-sm text-red-500">
                {errorValidator.description}
              </p>
            )}
            <input
              className="p-1 border rounded"
              type="temps"
              name="temps"
              placeholder="temps"
              onChange={handleChange}
              value={formData.temps}
            />
            {errorValidator.temps && (
              <p className="text-sm text-red-500">{errorValidator.temps}</p>
            )}
            <select
              className="p-1 border rounded"
              name="fk_categorie"
              onChange={handleChange}
              value={formData.fk_categorie}
            >
              <option value="" disabled>
                Choisissez une catégorie
              </option>
              <option value="1">Epilation</option>
              <option value="2">Soins</option>
              <option value="3">Cils&Sourcils</option>
              <option value="4">Onglerie</option>
            </select>
            {errorValidator.fk_categorie && (
              <p className="text-sm text-red-500">
                {errorValidator.fk_categorie}
              </p>
            )}

            <button
              className="py-2 rounded text-white bg-blue-900"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "ajout..." : "Ajouter"}
            </button>
            {error && <p className="text-sm text-red-500">{error}</p>}
            {isDataError && (
              <p className="text-sm text-red-500">{isDataError}</p>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default AjouterProduit;
