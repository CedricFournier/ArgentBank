import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button, { BUTTON_TYPES } from '../../composants/Button';
import Field, { FIELD_TYPES } from '../../composants/Field';
import { userEdit } from '../../redux/apiuser';

function EditName(props) {
    const form = useRef();
    const dispatch = useDispatch();
    const userName = useSelector((state) => state.user.userName);
    const token = useSelector((state) => state.user.token);
    const firstName = useSelector((state) => state.user.firstName);
    const lastName = useSelector((state) => state.user.lastName);

    const handleForm = async (e) => {
        e.preventDefault();
        const pseudo = form.current[0].value;
        const userName = ( pseudo ? pseudo : firstName )
        const postData ={
            userName: userName,
            token: token
        };
        dispatch(userEdit(postData))
    };

    return (
      <div className="diveditname">
        <h2 className='h2editname'>Edit user info</h2>
        <form ref={form}>
            <Field 
                type={FIELD_TYPES.INPUT_TEXT} 
                content="User name : " 
                id="editusername"
                label="labeleditname" 
                placeholder={userName}
            />
            <Field 
                type={FIELD_TYPES.INPUT_TEXT} 
                content="First name: " 
                id="firstname" 
                label="labeleditname" 
                defaultValue={firstName} 
                disabled="disabled" 
            />
            <Field 
                type={FIELD_TYPES.INPUT_TEXT} 
                content="Last name : " 
                id="lastname" 
                label="labeleditname" 
                defaultValue={lastName} 
                disabled="disabled" 
            />
        </form>
        <div className='btnedit'>
            <Button 
                class="button transaction-button" 
                type={BUTTON_TYPES.DEFAULT} 
                content="Save"  
                click={handleForm}
            />
            <Button 
                class="button transaction-button" 
                type ={BUTTON_TYPES.DEFAULT} 
                content="Cancel" 
                click={() => {dispatch({ type: "toggle"})}}
            />
        </div>
      </div>
    )
  }
  
  export default EditName