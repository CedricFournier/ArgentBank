import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import argentBankLogo from  '../../assets/img/argentBankLogo.webp';

import "./style.scss";

function Header() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const userName = useSelector((state) => state.user.userName);

    const signout = (e) => {
        e.preventDefault();
        dispatch({ type: "logOut"});
        navigate("/")
    };

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
            {userName ? 
                <div>
                    <Link className="main-nav-item" to="/User">
                    <i className="fa fa-user-circle"></i>
                    <span> {userName}</span>
                    </Link>
                    <Link className="main-nav-item" onClick={signout} to="/">
                    <i className="fa fa-sign-out"></i>
                    <span> Sign Out</span>
                    </Link>
                </div> 
                : 
                <Link className="main-nav-item" to="/Signin">
                    <i className="fa fa-user-circle"></i>
                    <span> Sign in</span>
                </Link> 
            }
            </div>
        </nav>
      </header>
    )
  }
  
  export default Header