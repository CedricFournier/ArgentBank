import { Link } from "react-router-dom"

function Signin() {
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label>
                            Username
                            <input type="text" id="username" required/>
                        </label>
                    </div>
                    <div className="input-wrapper">
                        <label>
                            Password
                            <input type="password" id="password" required/>
                        </label>
                    </div>
                    <div className="input-remember">
                        <label>
                            <input type="checkbox" id="remember-me" />
                            Remember me
                        </label>
                    </div>
                    <Link className="sign-in-button" to="/User">Sign in</Link>
                </form>
            </section>
        </main>
    )
  }
  
  export default Signin