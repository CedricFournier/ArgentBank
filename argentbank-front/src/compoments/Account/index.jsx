import Button from "../../composants/Button";

import "./style.scss";

function Account(props) {
    return  (
        <section className="account">
              <div className="account-content-wrapper">
                  <h3 className="account-title">Argent Bank {props.title} (x{props.multiplier})</h3>
                  <p className="account-amount">${props.balance}</p>
                  <p className="account-amount-description">{props.content}</p>
              </div>
              <div className="account-content-wrapper cta">
                  <Button class="button transaction-button" content="View transactions" />
              </div>
        </section>
    )
  }
  
export default Account