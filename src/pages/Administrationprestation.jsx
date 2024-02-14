import Header from "../components/Header";
import { Link } from "react-router-dom";

function Administrationprestation() {
  return (
    <>
      <Header />
      <section className=" h-[80vh] bg-fontmarbre bg-no-repeat bg-cover">
        <div className="traiDoree h-1"></div>

        <div className="flex flex-row justify-center items-center bg-white overflow-hidden">
          <img
            className="w-28 h-10 rotate-[-20deg]"
            src="images/cildroreegauche.PNG"
          />
          <h1 className="text-center text-3xl text-blue-900 font-semibold my-5">
            Listing Prestations
          </h1>
          <img className=" w-28 h-10 rotate-[-40deg]" src="images/gauche.PNG" />
        </div>
        <div className="traiDoree h-1"></div>
        <div className="grid grid-cols-1 gap-8 md:h-[30vh] md:w-[50vw] mx-auto my-8 md:grid-cols-2">
          <div className=" flex items-center justify-center flex-col rounded-lg text-center border border-yellow-300 mx-8 bg-slate-100 p-2">
            <h2 className="text-2xl text-blue-900 font-medium pb-7">
              Ajouter prestation
            </h2>
            <p className="text-blue-500 mt-4">
              Ajoutez une nouvelle prestation à votre catalogue
            </p>
            <Link
              className="bg-yellow-500 text-white py-2 px-4 mt-8 rounded-lg hover:bg-yellow-100 hover:text-yellow-500"
              to="/AjouterProduit"
            >
              Ajouter
            </Link>
          </div>
          <div className=" flex items-center justify-center flex-col rounded-lg text-center border border-yellow-300 mx-8 bg-slate-100">
            <h2 className="text-2xl text-blue-900 font-medium pb-7">
              Listing prestations
            </h2>
            <p className="text-blue-500 mt-4">
              Consultez et modifiez les prestations existantes
            </p>
            <Link
              className="bg-yellow-500 text-white py-2 px-4 mt-8 rounded-lg hover:bg-yellow-100 hover:text-yellow-500"
              to="/prestation"
            >
              Voir
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Administrationprestation;
