import { Link } from "react-router-dom"



function Error() {
    return  (
        <main className="mainerror">
            <h1 className="h1error">404</h1>
            <h2 className="h2error">Oups! La page que vous demandez n'existe pas.</h2>
            <Link className="aerror" to="/">Retourner sur la page d’accueil</Link>
        </main>
    )
  }
  
export default Error