import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userEdit } from '../../redux/userReducer';

function EditName() {
    const form = useRef();
    const dispatch = useDispatch();
    const userName = useSelector((state) => state.user.userName);
    const token = useSelector((state) => state.user.token);
    const firstName = useSelector((state) => state.user.firstName);
    const lastName = useSelector((state) => state.user.lastName);

    const handleForm = async (e) => {
        
        const postData ={
            userName: form.current[0].value,
            token: token
        };
        dispatch(userEdit(postData))
    };

    return (
      <div>
        <h2>Edit user info</h2>
        <form ref={form}>
            <label>
                User name: 
                <input type="text" id="username" placeholder={userName} required/>
            </label>
            <label>
                First name: 
                <input type="text" id="username" defaultValue={firstName} disabled="disabled"/>
            </label>
            <label>
                last name: 
                <input type="text" id="username" defaultValue={lastName} disabled="disabled"/>
            </label>
        </form>
        <div>
            <button className="transaction-button"
                onClick={(e) => {
                    handleForm();
                }}
            >Save</button>
            <button className="transaction-button">Cancel</button>
        </div>
      </div>
    )
  }
  
  export default EditName