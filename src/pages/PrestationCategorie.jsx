import Header from '../components/Header';
import { Link } from "react-router-dom";



function PrestationCategorie() {
  return (
    <>
      <Header />
      <div className="min-h-[80vh] flex flex-col bg-fontmarbre bg-no-repeat bg-cover">
        <div className="traiDoree h-1"></div>
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

        <div className="grid grid-cols-1 md:grid-cols-2 my-24 w-fit mx-auto gap-24">
          <div className="flex">
            <Link to="/categorie1">
              <div className="bg-epilation bg-no-repeat bg-cover h-80 w-80"></div>
              <div>
                <h2 className="text-lg text-center text-white font-semibold">
                  Epilations
                </h2>
              </div>
            </Link>
          </div>
          <div className="flex">
            <Link to="/categorie2">
              <div className="bg-soins bg-no-repeat bg-cover h-80 w-80"></div>
              <div>
                <h2 className="text-lg text-center text-white font-semibold">
                  Soins
                </h2>
              </div>
            </Link>
          </div>
          <div className="flex">
            <Link to="/categorie3">
              <div className="bg-cil bg-no-repeat bg-cover h-80 w-80"></div>
              <div>
                <h2 className="text-lg text-center text-white font-semibold">
                  Cils & Sourcils
                </h2>
              </div>
            </Link>
          </div>
          <div className="flex">
            <Link to="/categorie4">
              <div className="bg-onglerie bg-no-repeat bg-cover h-80 w-80"></div>
              <div>
                <h2 className="text-lg text-center text-white font-semibold">
                  Onglerie
                </h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrestationCategorie;
