import "./style.scss";

export const BUTTON_TYPES = {
    DEFAULT: 1,
    SUBMIT: 2,
  };

function Button(props) {
    switch (props.type) {
        case BUTTON_TYPES.DEFAULT:
          return (
            <button className={props.class} onClick={props.click}>{props.content}</button>
          );
        case BUTTON_TYPES.SUBMIT:
          return (
            <input type="submit" className={props.class} value={props.content}/>
          );
        default:
          return (
            <button className={props.class}>{props.content}</button>
          );
      }
    };
  
  export default Button