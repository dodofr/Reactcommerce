// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import Header from "../components/Header";

// function ModifierProduit() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     titre: "",
//     fichier: "",
//     alt: "",
//     prix: "",
//     description: "",
//     temps: "",
//     fk_categorie: "",
//   });

//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isDataError, setisDataError] = useState(false);

//   const [errorValidator, setErrorValidator] = useState({
//     titre: null,
//     fichier: null,
//     alt: null,
//     prix: null,
//     description: null,
//     temps: null,
//     fk_categorie: null,
//   });
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(
//           `http://localhost:3000/api/produits/${id}`
//         );

//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }

//         const data = await response.json();
//         setFormData(data.data);
//       } catch (error) {
//         console.error("Error fetching data:", error.message);
//         setError(error.message);
//       }
//     }

//     if (id) {
//       fetchData(); // Load product data when the component mounts
//     }
//   }, [id]); // Depend on id to re-run the effect when it changes

//   const handleChange = (event) => {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//     setErrorValidator({ ...errorValidator, [event.target.name]: null });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setError(null);
//     setIsLoading(true);
//     setisDataError(false);

//     try {
//       const response = await fetch(`http://localhost:3000/api/produits/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("jwt")}`,
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await response.json();
//       console.log(data);
//       if (data.message != `Le produit ${data.titre} bien été modifié.`) {
//         setisDataError(data.message);
//       } else {
//         navigate(`/produits/${id}`);
//       }

//       // console.log(isDataError)
//       if (!response.ok) {
//         throw new Error(data.error);
//       }
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   //
//   return (
//     <>
//       <Header />
//       <div className="bg-trait-or h-[0.5vh]"></div>
//       <div className="w-full h-[80vh] flex justify-center items-center bg-cadre bg-cover md:bg-auto bg-center bg-no-repeat">
//         <div className="flex-1 max-w-[400px] mx-auto border-2 rounded p-5">
//           <h1 className="text-2xl text-blue-900 font-semibold mb-3">
//             Modifier produit
//           </h1>
//           <form className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
//             <input
//               className="p-1 border rounded"
//               type="text"
//               name="titre"
//               placeholder="Titre"
//               onChange={handleChange}
//               value={formData.titre}
//             />
//             {errorValidator.titre && (
//               <p className="text-sm text-red-500">{errorValidator.titre}</p>
//             )}
//             <input
//               className="p-1 border rounded"
//               type="text"
//               name="fichier"
//               placeholder="fichier"
//               onChange={handleChange}
//               value={formData.fichier}
//             />
//             {errorValidator.fichier && (
//               <p className="text-sm text-red-500">{errorValidator.fichier}</p>
//             )}
//             <input
//               className="p-1 border rounded"
//               type="text"
//               name="alt"
//               placeholder="Alt"
//               onChange={handleChange}
//               value={formData.alt}
//             />
//             {errorValidator.alt && (
//               <p className="text-sm text-red-500">{errorValidator.alt}</p>
//             )}
//             <input
//               className="p-1 border rounded"
//               type="prix"
//               name="prix"
//               placeholder="prix"
//               onChange={handleChange}
//               value={formData.prix}
//             />
//             {errorValidator.prix && (
//               <p className="text-sm text-red-500">{errorValidator.prix}</p>
//             )}
//             <textarea
//               className="p-1 border rounded"
//               name="description"
//               placeholder="description"
//               onChange={handleChange}
//               value={formData.description}
//             ></textarea>
//             {errorValidator.description && (
//               <p className="text-sm text-red-500">
//                 {errorValidator.description}
//               </p>
//             )}
//             <input
//               className="p-1 border rounded"
//               type="temps"
//               name="temps"
//               placeholder="temps"
//               onChange={handleChange}
//               value={formData.temps}
//             />
//             {errorValidator.temps && (
//               <p className="text-sm text-red-500">{errorValidator.temps}</p>
//             )}
//             <select
//               className="p-1 border rounded"
//               name="fk_categorie"
//               onChange={handleChange}
//               value={formData.fk_categorie}
//             >
//               <option value="" disabled>
//                 Choisissez une catégorie
//               </option>
//               <option value="1">Epilation</option>
//               <option value="2">Soins</option>
//               <option value="3">Cils&Sourcils</option>
//               <option value="4">Onglerie</option>
//             </select>
//             {errorValidator.fk_categorie && (
//               <p className="text-sm text-red-500">
//                 {errorValidator.fk_categorie}
//               </p>
//             )}

//             <button
//               className="py-2 rounded text-white bg-blue-900"
//               type="submit"
//               disabled={isLoading}
//             >
//               {isLoading ? "Modification..." : "Modifier"}
//             </button>
//             {error && <p className="text-sm text-red-500">{error}</p>}
//             {isDataError && (
//               <p className="text-sm text-red-500">{isDataError}</p>
//             )}
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ModifierProduit;
import Header from '../components/Header';
import ProduitUpdate from '../components/ProduitUpdate';


function ModifierProduit() {
   

    return (
        <>
        <Header/>
        <div className="traiDoree h-1"></div>
        <ProduitUpdate/>

        </>
    )
}

export default ModifierProduit

