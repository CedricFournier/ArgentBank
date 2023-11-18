import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLog } from "../../redux/apiuser";
import Button, { BUTTON_TYPES } from "../../composants/Button"
import Field, { FIELD_TYPES } from "../../composants/Field";

function Signin() {
    const form = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const status = useSelector((state) => state.user.status);
    const useremail = window.localStorage.getItem('useremail');
    const userpswd = window.localStorage.getItem('userpswd');
    
    const handleForm = async (e) => {
        e.preventDefault();
        const postData = {
            email: form.current[0].value,
            password: form.current[1].value,
            checked: form.current[2].checked,
        };
        dispatch(userLog(postData));
    }
    
    useEffect(() => {
        if(status === 200) {
            navigate("/User");
        }
    })
    
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form ref={form} onSubmit={e => handleForm(e)}>
                    <Field type={FIELD_TYPES.INPUT_MAIL} content="Username" id="username" defaultValue={useremail}  />
                    <Field type={FIELD_TYPES.INPUT_PASSWORD} content="Password" id="password" defaultValue={userpswd}  />
                    <div className="input-remember">
                        <label>
                            <input type="checkbox" id="remember-me" />
                            Remember me
                        </label>
                    </div>
                    {status === 400 ? 
                        <p id="errlogin">Erreur dans l’identifiant ou le mot de passe</p>
                        : 
                        null
                    }
                    <Button type={BUTTON_TYPES.SUBMIT} class="button sign-in-button" content="Sign in"/>
                </form>
            </section>
        </main>
    )
  }
  
  export default Signin