import RouteNonConnecte from "./components/RouteNonConnecte";
import RouteConnecte from "./components/RouteConnecte";
import jwt_decode from "jwt-decode";
function App() {
    const token = localStorage.getItem("jwt");
    let isAdmin = false;
    if (token) {
        const decoded = jwt_decode(token);
        isAdmin = decoded.isAdmin;
    }
return (
<>
{isAdmin ? (
<RouteConnecte />
) : (
<RouteNonConnecte />
)}
</>
);
}

export default App;