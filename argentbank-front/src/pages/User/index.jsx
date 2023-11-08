import { useState } from "react";
import EditName from "../../compoments/EditName"
import Button, { BUTTON_TYPES } from "../../composants/Button"

import "./style.scss";

function User() {
    const account = [
        {   
            "id" : "1",
            "name" : "Checking",
            "balance" : "2082.79",
            "multiplier" : "8349",
            "description" : "Available Balance"
        },
        {
            "id" : "2",
            "name" : "Savings",
            "balance" : "10928.42",
            "multiplier" : "6712",
            "description" : "Available Balance"
        },
        {
            "id" : "3",
            "name" : "Credit Card",
            "balance" : "184.30",
            "multiplier" : "8349",
            "description" : "Current Balance"
        }
    ];

    const [open, setOpen] = useState(false)
    const toggle = () => {
        setOpen(!open);
      };

    return (
        <main className="main bg-dark">
            <div className="header">
            {!open ? 
                <div>
                    <h1>Welcome back<br />Tony Jarvis!</h1>
                    <Button class="button edit-button" type={BUTTON_TYPES.DEFAULT} content="Edit Name" click={toggle} /> 
                </div>
                : 
                <EditName click={toggle}/>
            }
            </div>
            <h2 className="sr-only">Accounts</h2>
            {account.map((account, index) => (
              <section key={index} className="account">
              <div className="account-content-wrapper">
                  <h3 className="account-title">Argent Bank {account.name} (x{account.multiplier})</h3>
                  <p className="account-amount">${account.balance}</p>
                  <p className="account-amount-description">{account.description}</p>
              </div>
              <div className="account-content-wrapper cta">
                  <Button class="button transaction-button" content="View transactions" />
              </div>
          </section>
            ))}
        </main>
    )
  }
  
  export default User