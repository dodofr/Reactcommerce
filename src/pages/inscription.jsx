import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function Inscription() {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    firstname: "",
    email: "",
    password: "",
    acceptedPrivacyPolicy: false,
  });
  const handleCheckboxChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.checked,
    }));
    if (error === "Veuillez accepter la politique de confidentialité") {
      setError(null);
    }
  };
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDataError, setisDataError] = useState(false);
  const navigate = useNavigate();
  const [errorValidator, setErrorValidator] = useState({
    username: null,
    name: null,
    firstname: null,
    email: null,
    password: null,
    acceptedPrivacyPolicy: false,
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setErrorValidator({ ...errorValidator, [event.target.name]: null });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.acceptedPrivacyPolicy) {
      setError("Veuillez accepter la politique de confidentialité");
      return;
    }
    setError(null);
    setIsLoading(true);
    setisDataError(false);

    //partie verification input
    // Validation des données de formulaire
    let hasError = false;
    if (!formData.username) {
      setErrorValidator({
        ...errorValidator,
        username: "Le nom d'utilisateur ne peut être vide",
      });
      hasError = true;
    }
    if (/[&<>"'/]/.test(formData.username)) {
      setErrorValidator({
        ...errorValidator,
        username:
          "Vous ne pouvez pas utiliser les caractères spéciaux & , <, >, \", ', / ",
      });
      hasError = true;
    }
    if (!formData.name) {
      setErrorValidator({
        ...errorValidator,
        name: "Le nom ne peut être vide",
      });
      hasError = true;
    }
    if (!formData.firstname) {
      setErrorValidator({
        ...errorValidator,
        firstname: "Le prenom ne peut être vide",
      });
      hasError = true;
    }
    if (!formData.email) {
      setErrorValidator({
        ...errorValidator,
        email: "L'email ne peut être vide",
      });
      hasError = true;
    } else if (
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)
    ) {
      setErrorValidator({
        ...errorValidator,
        email: "L'email doit être valide",
      });
      hasError = true;
    }
    if (!formData.password) {
      setErrorValidator({
        ...errorValidator,
        password: "Le mot de passe ne peut être vide",
      });
      hasError = true;
    }
    if (!formData.username.match(/^[a-zA-Z]{1,10}[0-9]{0,3}$/)) {
      setErrorValidator({
        ...errorValidator,
        username:
          "Vous devez utiliser 10 caractères maximum et 3 chiffres maximum",
      });
      hasError = true;
    }
    if (
      !formData.password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{10,}$/
      )
    ) {
      setErrorValidator({
        ...errorValidator,
        password:
          "Le mot de passe doit contenir au moins 10 caractères, avec au moins un caractère spécial , un chiffre, une majuscule et une minuscule",
      });
      hasError = true;
    }

    // Si il y a des erreurs, on arrête l'exécution de la fonction
    if (hasError) {
      setIsLoading(false);
      return;
    }

    //fin de la partie

    try {
      const response = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      // console.log(data)
      if (data.message == "Validation error") {
        setisDataError(data.message);
        console.log(data);
      } else {
        navigate("/connection");
      }

      // console.log(isDataError)
      if (!response.ok) {
        throw new Error(data.error);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  //
  return (
    <>
      <Header />
      <div className="bg-trait-or h-[0.5vh]"></div>
      <div className="w-full h-[80vh] flex justify-center items-center bg-cadre bg-cover md:bg-auto bg-center bg-no-repeat">
        <div className="flex-1 max-w-[400px] mx-auto border-2 rounded p-5">
          <h1 className="text-2xl text-blue-900 font-semibold mb-3">
            Inscription
          </h1>
          <form className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
            <input
              className="p-1 border rounded"
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              value={formData.username}
            />
            {errorValidator.username && (
              <p className="text-sm text-red-500">{errorValidator.username}</p>
            )}
            <input
              className="p-1 border rounded"
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={formData.name}
            />
            {errorValidator.name && (
              <p className="text-sm text-red-500">{errorValidator.name}</p>
            )}
            <input
              className="p-1 border rounded"
              type="text"
              name="firstname"
              placeholder="First Name"
              onChange={handleChange}
              value={formData.firstname}
            />
            {errorValidator.firstname && (
              <p className="text-sm text-red-500">{errorValidator.firstname}</p>
            )}
            <input
              className="p-1 border rounded"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
            />
            {errorValidator.email && (
              <p className="text-sm text-red-500">{errorValidator.email}</p>
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
            <div className="flex items-center">
              <input
                type="checkbox"
                name="acceptedPrivacyPolicy"
                onChange={handleCheckboxChange}
                checked={formData.acceptedPrivacyPolicy}
              />
              <label htmlFor="acceptedPrivacyPolicy" className="ml-2 text-sm">
                J'accepte la politique de confidentialité,{" "}
                <Link className="text-blue-500 underline" to="/RGPD">
                  cliquer ici{" "}
                </Link>{" "}
                pour en savoir plus
              </label>
            </div>

            <button
              className="py-2 rounded text-white bg-blue-900"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Inscription"}
            </button>
            {error && <p className="text-sm text-red-500">{error}</p>}
            {isDataError && (
              <p className="text-sm text-red-500">{isDataError}</p>
            )}
          </form>
          <p className="text-sm">
            Déjà un compte ?{" "}
            <Link className="text-blue-500 underline" to="/connection">
              Connexion
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Inscription;
