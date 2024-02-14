import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

function HeaderBig() {
  const token = localStorage.getItem("jwt");
  let isAdmin = false;
  if (token) {
    const decoded = jwt_decode(token);
    isAdmin = decoded.isAdmin;
    console.log(isAdmin);
  }
  return (
    <nav className="flex items-center justify-evenly bg-marbre bg-cover h-[10vh]">
      {isAdmin ? (
        <>
          <Link className="text-white font-semibold" to="/">
            Acceuil
          </Link>
          <Link className="text-white font-semibold" to="/PrestationCategorie">
            Prestations
          </Link>
          <a
            className="text-white font-semibold"
            href="/photos"
          >
            Galerie
          </a>

          <Link className="text-white font-semibold" to="/utilisateur">
            Administration Utilistateurs
          </Link>
          <Link className="text-white font-semibold" to="/galerie">
            Administration galerie
          </Link>
          <Link
            className="text-white font-semibold"
            to="/Administrationprestation"
          >
            Administration prestations
          </Link>

          {/* <Link className="text-white font-semibold" to="index.php?page=panier">Panier</Link> */}
          <Link className="text-white font-semibold" to="/deconnection">
            Se Déconnecter
          </Link>
        </>
      ) : token ? (
        <>
          <>
            <Link className="text-white font-semibold" to="/">
              Acceuil
            </Link>
            <Link
              className="text-white font-semibold"
              to="/PrestationCategorie"
            >
              Prestations
            </Link>
            <a
              className="text-white font-semibold"
              href="/photos"
            >
              Galerie
            </a>
            {/* <Link className="text-white font-semibold" to="index.php?page=panier">Panier</Link> */}
            <Link className="text-white font-semibold" to="/deconnection">
              Se Déconnecter
            </Link>
          </>
        </>
      ) : (
        <>
          <Link className="text-white font-semibold" to="/">
            Acceuil
          </Link>
          <Link className="text-white font-semibold" to="/PrestationCategorie">
            Prestations
          </Link>
          <a
            className="text-white font-semibold"
            href="/photos"
          >
            Galerie
          </a>
          {/* <Link className="text-white font-semibold" to="index.php?page=panier">Panier</Link> */}
          <Link className="text-white font-semibold" to="/connection">
            Me connecter
          </Link>
        </>
      )}
    </nav>
  );
}
export default HeaderBig;
