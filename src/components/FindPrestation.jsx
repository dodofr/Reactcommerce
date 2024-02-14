// import { useState, useEffect } from 'react';

// function FindPrestation() {
//   const [PrestationData, setPrestationData] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch('http://localhost:3000/api/produits');
//       const data = await response.json();
//       setPrestationData(data);
//     }
//     fetchData();
//   }, []);

//   if (!PrestationData) {
//     return <div>Loading...</div>
//   }

//   if(PrestationData) {
//     console.log(PrestationData)
//   }
//   return (

//     <div>
//       <ul className="max-w-4xl mx-auto">
//         {PrestationData.data.map((Prestation) => (
//           <>
//           <li className="grid bg-white grid-cols-5 border p-2 rounded mb-3">
//           <div><span className="text-sm font-bold">Titre:</span>{Prestation.titre} </div>
//           <div><span className="text-sm font-bold">Image:</span> {Prestation.fichier}</div>
//           <div><span className="text-sm font-bold">Prix:</span>{Prestation.prix} </div>
//           <div><span className="text-sm font-bold">Description:</span>{Prestation.description} </div>
//           <div><span className="text-sm font-bold">Temps:</span>{Prestation.description} </div>
//           </li>
//           </>

//         ))}
//       </ul>
//     </div>
//   );
// }

// export default FindPrestation;

import { useState, useEffect } from "react";
import ListingPrestation from "./ListingPrestation";
import { useNavigate } from "react-router-dom";

function FindPrestation() {
  const [produitsData, setProduitsData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/api/produits", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        });
        if (response.status === 401) {
          navigate("/");
        }
        const data = await response.json();
        console.log(data);
        setProduitsData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  if (!produitsData) {
    return (
      <div className="h-[80vh]">
        {" "}
        <p className="text-2xl text-blue-900 text-center my-5">Chargement...</p>
      </div>
    );
  }

  return (
    <div className="h-[80vh] bg-fontmarbre bg-no-repeat bg-cover">
      <div className="flex flex-row justify-center items-center bg-white overflow-hidden">
        <img
          className="w-28 h-10 rotate-[-20deg]"
          src="images/cildroreegauche.PNG"
        />
        <h1 className="text-center text-3xl text-blue-900 font-semibold my-5">
          Prestations
        </h1>
        <img className=" w-28 h-10 rotate-[-40deg]" src="images/gauche.PNG" />
      </div>
      <div className="traiDoree h-1"></div>
      <ul className="max-w-6xl m-8 mx-auto">
        {produitsData.data.map((produits) => (
          <>
            <ListingPrestation
              titre={produits.titre}
              image={produits.fichier}
              prix={produits.prix}
              description={produits.description}
              id={produits.id}
              temps={produits.temps}
            />
            {/* {console.log(produits)} */}
          </>
        ))}
      </ul>
    </div>
  );
}

export default FindPrestation;
