//Different import dont nous aurons besoin. Les states ou états pour React, la navigation pour creer une redirection,
// notre composant Header, Link pour créer des liens dans React.

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Link } from "react-router-dom";

//connexion qui va gerer l'affichage du formulaire, l'envoie à l'API REST et la gestion des erreurs
const Connection = () => {
  // Initialisation du state ou état pour gérer les données du formulaire, vide
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  // Initialisation du state pour gérer les erreur renvoyé par le serveur
  const [error, setError] = useState(null);
  // Initialisation du state pour gérer les chargements, boolean
  const [isLoading, setIsLoading] = useState(false);
  //constante qui va me permettre des creer une redirection si la connexion c'est bien passé
  const navigate = useNavigate();
  // Initialisation du state pour gérer les erreurs renvoyé côté client
  const [errorValidator, setErrorValidator] = useState({
    username: null,
    password: null,
  });
  // Fonction qui va dynamiquement enregistrer les données saisies par l'utilisateur dans le formData.
  //Elle va aussi nous permettre de reset le message d'erreur, si nous en avions eu un.
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setErrorValidator({ ...errorValidator, [event.target.name]: null });
  };
  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    //Nous empechons l'actualisation du formulaire
    e.preventDefault();
    //Nous reset le setError, pour ne pas être bloqué dans le cas où nous avions précédemment une erreur
    setError(null);
    //Nous indiquons que le stat est en chargement
    setIsLoading(true);
    //Création d'une variable initialisée à false
    let hasError = false;
    //Création de conditions, si la condition est vraie alors nous stockons une erreur dans errorValidator et nous définissons la variable hasError = true

    if (/[&<>"'/]/.test(formData.username)) {
      setErrorValidator({
        ...errorValidator,
        username:
          "Vous ne pouvez pas utiliser les caractères spéciaux & , <, >, \", ', / ",
      });
      hasError = true;
    }
    if (!formData.username.match(/^[a-zA-Z]{1,20}[0-9]{0,3}$/)) {
      setErrorValidator({
        ...errorValidator,
        username: "le nom que vous voulez entrer n'est pas correctement ecrit",
      });
      hasError = true;
    }
 
    //Si une des conditions est vraie alors la variable hasError est vraie donc nous passons l'état chargement en faux et nous arrêtons le processus
    // en sortant de la fonction
    if (hasError) {
      setIsLoading(false);
      return;
    }

    //Nous faisons une requête http de type post à l'URL avec les données du formulaire sous forme Json
    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //Si nous avons besoin d'une autorisation via un token JsonWebToken
          //'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        },
        body: JSON.stringify(formData),
      });
      //Nous stockons la réponse dans une constante data, réponse qui est convertie au format Json
      const data = await response.json();
      //Si la réponse n'est pas ok, quel est différente du statut 200, alors nous stockons le message d'erreur
      if (!response.ok) {
        throw new Error(data.message);
      }

      // Nous extractons le token que nous stockons dans le localstorage
      const jwt = data.token;
      localStorage.setItem("jwt", jwt);
      //Pour finir, si tout s’est bien passé, nous sommes redirigé vers la page d'accueil
      navigate("/");
      window.location.reload();
      //Si le try a des erreurs, nous les stockons ici
    } catch (err) {
      setError(err.message);
      //À la fin nous arrêtons l'état chargement et affichons le résultat obtenu( erreur ou réussite)
    } finally {
      setIsLoading(false);
    }
  };
  //HTML que nous affichons sur notre page web
  return (
    <>
      <Header />
      <div className="traiDoree h-1"></div>
      <div className="w-full h-[80vh] flex justify-center items-center bg-cadre bg-cover md:bg-auto bg-center bg-no-repeat">
        <div className=" flex-1 max-w-[400px] mx-auto border-2 rounded p-5">
          <h1 className="text-2xl text-blue-900 font-semibold mb-3">
            Connexion
          </h1>
          {/* lorsque nous validons le formulaire nous déclenchons la fonction handleSubmit */}
          <form className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
            <input
              className="p-1 border rounded"
              type="text"
              name="username"
              placeholder="Username"
              //Lorsque nous écrivons nous déclenchons la fonction handlechange qui stocke dynamiquement les données écrites par l'utilisateur
              onChange={handleChange}
              value={formData.username}
            />
            {/* Si nous avons une mauvaise une mauvaise saisie, alors nous lui affichons un message */}
            {errorValidator.username && (
              <p className="text-sm text-red-500">{errorValidator.username}</p>
            )}
            <input
              className="p-1 border rounded"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={formData.password}
            />
            {errorValidator.password && (
              <p className="text-sm text-red-500">{errorValidator.password}</p>
            )}
            {/* Si nous avons des erreurs envoyées par le serveur, nous les affichons ici */}
            {error && <p className="text-sm text-red-500">{error}</p>}
            <button
              className="py-2 rounded text-white bg-blue-900 "
              type="submit"
            >
              {/* Si la page charge alors nous aurons "Loading..."" sinon "Se connecter" */}
              {isLoading ? "Chargement..." : "Se connecter"}
            </button>
          </form>
          <p className="text-sm">
            Pas encore de compte ?{" "}
            <Link className="text-blue-500 underline" to="/inscription">
              Inscription
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Connection;
