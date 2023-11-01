import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLog } from "../../redux/userReducer";
import { useNavigate } from 'react-router-dom'

function Signin() {
    const form = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector((state) => state.user.token);

    if (token) {
        navigate("/User");
      }

    const handleForm = async (e) => {
        e.preventDefault();
        const postData ={
            email: form.current[0].value,
            password: form.current[1].value,
        };
        dispatch(userLog(postData))
    };

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form ref={form} onSubmit={e => handleForm(e)}>
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
                    <input className="sign-in-button" type="submit" value="Sign in" />
                </form>
            </section>
        </main>
    )
  }
  
  export default Signin