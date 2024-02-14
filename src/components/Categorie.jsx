import React, { useState, useEffect } from 'react';

function Categorie(num) {
  const [produitsData, setProduitsData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3000/api/produits');
        const data = await response.json();
        setProduitsData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  if (!produitsData) {
    return <div className='h-[80vh]'><p className='text-2xl text-blue-900 text-center my-5'>Chargement...</p></div>
  }

  // Filtrer les produits dont la catégorie est égale à 1
  const categorienumero = num.num
  //console.log(categorienumero)
  const produitsFiltres = produitsData.data.filter(produit => produit.fk_categorie == categorienumero);
  
  // Trier les produits par ordre décroissant
  //produitsFiltres.sort((a, b) => b.ordre - a.ordre);

  return (
    <div className='h-[80vh] bg-fontmarbre bg-no-repeat bg-cover'>
      {/* ... Autres éléments d'interface utilisateur ... */}

      <ul className="max-w-6xl m-8 mx-auto">
        {produitsFiltres.map((produit) => (
          <li className="grid bg-white md:grid-cols-5 grid-cols-2 border border-blue-900 p-2 rounded m-3">
          <div className="mx-auto">
            <span className="text-sm font-bold text-blue-900">titre: </span>
            {produit.titre}{" "}
          </div>
  
          <div className="mx-auto hidden md:block">
            <span className="text-sm font-bold text-blue-900">Image: </span> {produit.fichier}
          </div>
          <div className="mx-auto hidden md:block">
            <span className="text-sm font-bold text-blue-900">prix: </span>
            {produit.prix}{" "}
          </div>
          <div className="mx-auto hidden md:block">
            <span className="text-sm font-bold text-blue-900">description: </span>
            {produit.description}{" "}
          </div>
          <div className="mx-auto hidden md:block">
            <span className="text-sm font-bold text-blue-900">temps: </span>
            {produit.temps}{" "}
          </div>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default Categorie;
