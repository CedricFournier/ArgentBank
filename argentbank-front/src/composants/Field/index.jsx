import "./style.scss";

export const FIELD_TYPES = {
    INPUT_TEXT: 1,  
    INPUT_MAIL: 2,
    INPUT_PASSWORD: 3
};

function Field(props) {
    let component;
    switch (props.type) {
        case FIELD_TYPES.INPUT_TEXT:
            component = (
                <input
                type="text"
                id={props.id}
                placeholder={props.placeholder}
                defaultValue={props.defaultValue}
                disabled={props.disabled}
                required
                />
            );
            break;
        case FIELD_TYPES.INPUT_MAIL:
            component = (
                <input
                type="mail"
                id={props.id}
                pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                required
                />
            );
            break;
        case FIELD_TYPES.INPUT_PASSWORD:
            component = (
                <input
                type="password"
                id={props.id}
                required
                />
            );
            break;
        default:
            component = (
                <input
                type="text"
                id={props.id}
                placeholder={props.placeholder}
                required
                />
            );
    }
    return (
        <div className="input-wrapper">
            <label className={props.label}>
                {props.content}
                {component}
            </label>
        </div>
  );

};
  
  export default Field