import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../components/Header';

function Ajouterphoto() {
  const [formData, setFormData] = useState({
    name: "",
    fichier: "",
    alt: "",
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDataError, setisDataError] = useState(false);
  const navigate = useNavigate();
  const [errorValidator, setErrorValidator] = useState({
    name: null,
    fichier: null,
    alt: null,
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
    if (!formData.name) {
      setErrorValidator({
        ...errorValidator,
        name: "Le name ne peut être vide",
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
   

    // Si il y a des erreurs, on arrête l'exécution de la fonction
    if (hasError) {
      setIsLoading(false);
      return;
    }
    //fin de la partie

    try {
      const response = await fetch(
        "http://localhost:3000/api/photos",
        {
          method: "POST",
          headers: { "Content-Type": "application/json",
          'Authorization': `Bearer ${localStorage.getItem('jwt')}` },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      // console.log(data)
      if (data.message != "Le photo a a bien été crée.") {
        setisDataError(data.message);
      } else {
        navigate("/listephoto");
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
            Ajouter un photo
          </h1>
          <form className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
            <input
              className="p-1 border rounded"
              type="text"
              name="name"
              placeholder="name"
              onChange={handleChange}
              value={formData.name}
            />
            {errorValidator.name && (
              <p className="text-sm text-red-500">{errorValidator.name}</p>
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

export default Ajouterphoto;
