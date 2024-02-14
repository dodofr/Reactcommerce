import Header from "../components/Header";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="traiDoree h-1"></div>
      <section className="sectionAcceuilHaut h-[80vh]">
        <div className="flex flex-col justify-center items-center my-5">
          <img className="logo" src="images/New_Elegant_Logo1.jpg" alt="logo" />
          <h1 className="h1Acceuil text-2xl">
            Nous sommes désolé, la page n'existe pas
          </h1>
          <Link className="p-2 rounded text-white bg-blue-900" to="/">
            Retourner à l'accueil
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
