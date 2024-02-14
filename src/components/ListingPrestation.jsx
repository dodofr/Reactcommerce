import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

function ListingPrestation({ titre, image, prix, description,temps, id }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async (produitId) => {
    setIsLoading(true);
    setError(null);
    setShowModal(false);

    try {
      const response = await fetch(
        `http://localhost:3000/api/produits/${produitId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("le produit n'existe pas");
      }
      // do something after the user is deleted, for example navigate to the list of users.
      location.reload();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        className="fixed top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2"
      >
        <div className=" bg-blue-200 rounded text-white border border-blue-900 p-5">
          <Modal.Header closeButton className="">
            <Modal.Title className="text-center text-lg font-bold text-blue-900">
              Confirmer la suppression
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center p-4">
            <p className="text-lg font-medium text-blue-900 ">
              Êtes-vous sûr de vouloir supprimer le produit{" "}
              <span className="text-red-600">{titre}</span>?
            </p>
          </Modal.Body>
          <Modal.Footer className="flex justify-center p-2">
            <Button
              variant="secondary"
              onClick={handleCloseModal}
              className="mx-3 p-2 hover:text-blue-900 hover:bg-blue-100 bg-blue-900 text-white border border-blue-300 rounded"
            >
              Annuler
            </Button>
            <Button
              variant="danger"
              onClick={() => handleDelete(id)}
              className="mx-3 p-2 text-white bg-red-600 hover:bg-red-300 rounded"
            >
              Supprimer
            </Button>
          </Modal.Footer>
        </div>
      </Modal>

      <li className="grid bg-white md:grid-cols-5 grid-cols-2 border border-blue-900 p-2 rounded m-3">
        <div className="mx-auto">
          <span className="text-sm font-bold text-blue-900">titre: </span>
          {titre}{" "}
        </div>

        <div className="mx-auto hidden md:block">
          <span className="text-sm font-bold text-blue-900">Image: </span> {image}
        </div>
        <div className="mx-auto hidden md:block">
          <span className="text-sm font-bold text-blue-900">prix: </span>
          {prix}{" "}
        </div>
        <div className="mx-auto hidden md:block">
          <span className="text-sm font-bold text-blue-900">description: </span>
          {description}{" "}
        </div>
        <div className="mx-auto hidden md:block">
          <span className="text-sm font-bold text-blue-900">temps: </span>
          {temps}{" "}
        </div>
        <div className="mx-auto">
          {error && <p className="error">{error}</p>}
         
            <button onClick={handleShowModal}>
               {isLoading ? (
              <span className="text-sm font-bold text-red-900">
                {" "}
                Suppression...
              </span>
            ) : (
              <span className="text-sm font-bold text-red-900"> Supprimer</span>
            )}
            </button>
         
        </div>
        <div>
        <Link className="text-sm font-bold text-blue-900" to={`/modifierproduit/${id}`}>
            Modifier
          </Link>
        </div>
      </li>
    </>
  );
}

export default ListingPrestation;