import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

function Photos() {
  const [photoData, setPhotoData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/api/photos", {});
        if (response.status === 401) {
          navigate("/");
        }
        const data = await response.json();
        // console.log(data);
        setPhotoData(data.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  if (!photoData) {
    return (
      <>
        <Header />
        <section className="h-[80vh] bg-fontmarbre bg-no-repeat bg-cover">
          <div className="traiDoree h-1"></div>
          <div className="flex flex-row justify-center items-center bg-white overflow-hidden">
            <img
              className="w-28 h-10 rotate-[-20deg]"
              src="images/cildroreegauche.PNG"
              alt="Image1"
            />
            <h1 className="text-center text-3xl text-blue-900 font-semibold my-5">
              Galerie Photos
            </h1>
            <img
              className="w-28 h-10 rotate-[-40deg]"
              src="images/gauche.PNG"
              alt="Image2"
            />
          </div>
          <div className="traiDoree h-1"></div>
          <p className="text-2xl text-blue-900 text-center my-5">
            Chargement...
          </p>
        </section>{" "}
        <p className="text-2xl text-blue-900 text-center my-5">Chargement...</p>
      </>
    );
  }
  return (
    <>
      <Header />
      <section className="min-h-80vh bg-fontmarbre bg-no-repeat bg-cover">
        <div className="traiDoree h-1"></div>
        <div className="flex flex-row justify-center items-center bg-white overflow-hidden">
          <img
            className="w-28 h-10 rotate-[-20deg]"
            src="images/cildroreegauche.PNG"
            alt="Image1"
          />
          <h1 className="text-center text-3xl text-blue-900 font-semibold my-5">
            Galerie Photos
          </h1>
          <img
            className="w-28 h-10 rotate-[-40deg]"
            src="images/gauche.PNG"
            alt="Image2"
          />
        </div>
        <div className="traiDoree h-1"></div>
       
        {/* Grille pour afficher les photos */}
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            {photoData.map((photo) => (
              <div key={photo.id} style={{ marginBottom: '16px' }}>
                <img alt={photo.alt} src={photo.fichier} style={{width: "100%", display: "block"}}/>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
                              
      </section>
    </>
  );
}

export default Photos;
