import { useState, useEffect } from 'react';
import Listing from './Listing';
import { useNavigate } from "react-router-dom";


function FindUser() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
 
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3000/api/users', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`
          }
        });
        if (response.status === 401) {
          navigate("/");
        }
        const data = await response.json();
        console.log(data)
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  if (!userData) {
    return <div className='h-[80vh]'> <p className='text-2xl text-blue-900 text-center my-5'>Chargement...</p></div>
  }

  return (
    <div className='h-[80vh] bg-fontmarbre bg-no-repeat bg-cover'>
    
        

        <div className="flex flex-row justify-center items-center bg-white overflow-hidden">
          <img
            className="w-28 h-10 rotate-[-20deg]"
            src="images/cildroreegauche.PNG"
          />
          <h1 className="text-center text-3xl text-blue-900 font-semibold my-5">
            Utilisateurs
          </h1>
          <img className=" w-28 h-10 rotate-[-40deg]" src="images/gauche.PNG" />
        </div>
        <div className="traiDoree h-1"></div>
      <ul className="max-w-6xl m-8 mx-auto">
        {userData.data.map((user) => (
          
          <>
          <Listing username={user.username} name={user.name} firstname={user.firstname} email={user.email} id={user.id} isAdmin={user.isAdmin} />
          </>
          
        ))}
      </ul>
    </div>
  );
}

export default FindUser;
