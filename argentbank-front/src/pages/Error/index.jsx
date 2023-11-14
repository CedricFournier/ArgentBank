import { Link } from "react-router-dom"

import "./style.scss";

function Error() {
    return  (
        <main className="mainerror">
            <h2 className="h2error">404</h2>
            <h3 className="h3error">Oups! La page que vous demandez n'existe pas.</h3>
            <Link className="aerror" to="/">Retourner sur la page d’accueil</Link>
        </main>
    )
  }
  
export default Error