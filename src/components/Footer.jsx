import { Link } from "react-router-dom";

function Footer() {

  
return(
    <>
<div className="bg-trait-or h-[0.5vh]"></div>

        <footer className="relative bottom-0 h-[9vh] flex items-center justify-evenly bg-marbre bg-cover w-full">
            
                <Link className="text-white font-semibold" to="/mentionlegale">Mentions légales</Link>
                <Link className="text-white font-semibold" to="/rgpd">Politique de confidentialité</Link>
                <div className="flex items-center gap-x-5">
                    <Link className="text-white font-semibold" to="/"><i className="fab fa-instagram text-3xl"></i></Link>
                    <Link className="text-white font-semibold" to="/"><i className="fab fa-facebook-square text-3xl"></i></Link>
                </div>
                
        </footer>
        </>
)}
  
export default Footer

