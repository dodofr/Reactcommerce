import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const DeleteUser = () => {
    // recupere le parametre de l'url 
    const { id } = useParams();
    // le parametre sera sous forme :id comme par exemple:44, on va donc split au niveau du :
    const parts = id.split(':');
    //on obtient une partie vide et une partie avec 44, donc on garde la parts[1]
    const userId = parseInt(parts[1]); 
    //console.log(userId)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const handleDelete = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                },
            });
            
            if (!response.ok) {
                throw new Error('l\'utilisateur n\'existe pas');
            }
            // do something after the user is deleted, for example navigate to the list of users.
            navigate("/utilisateur")
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            {error && <p className="error">{error}</p>}
            <button onClick={handleDelete} disabled={isLoading}>
                {isLoading ? 'Deleting...' : 'Delete User'}
            </button>
        </div>
    );
};

export default DeleteUser;





