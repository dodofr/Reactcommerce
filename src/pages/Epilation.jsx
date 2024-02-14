import React from 'react';
import Categorie from '../components/Categorie';
import Header from '../components/Header';

function Epilation() {
  return (
    <>
      <Header />
      <div className="min-h-[80vh] flex flex-col bg-fontmarbre bg-no-repeat bg-cover">
        <div className="traiDoree h-1"></div>
        <div className="flex flex-row justify-center items-center bg-white overflow-hidden">
          <img className="w-28 h-10 rotate-[-20deg]" src="images/cildroreegauche.PNG" alt="Left Image" />
          <h1 className="text-center text-3xl text-blue-900 font-semibold my-5">Epilation</h1>
          <img className="w-28 h-10 rotate-[-40deg]" src="images/gauche.PNG" alt="Right Image" />
        </div>
        <div className="traiDoree h-1"></div>
        <Categorie num={1} />
      </div>
    </>
  );
}

export default Epilation;
