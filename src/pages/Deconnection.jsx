import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Deconnection = () => {
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.removeItem("jwt");
        navigate("/");
    }, [])

    return null;
};

export default Deconnection
