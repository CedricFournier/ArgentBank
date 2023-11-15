function Feature(props) {
    return  (
        <div className="features-item">
        <img src={props.src} alt={props.alt} className="features-icon" />
        <h3 className="features-item-title">{props.title}</h3>
        <p>
            {props.content}
        </p>
    </div>
    )
  }
  
export default Feature