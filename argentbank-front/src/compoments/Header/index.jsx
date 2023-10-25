import { Link } from 'react-router-dom'
import argentBankLogo from  '../../assets/img/argentBankLogo.webp'

function Header() {
    return (
      <header>
        <nav className="main-nav">             
            <Link className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src={argentBankLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link className="main-nav-item" to="/Signin">
                    <i className="fa fa-user-circle"></i>
                    <span> Sign in</span>
                </Link>
            </div>
        </nav>
      </header>
    )
  }
  
  export default Header