import { useDispatch, useSelector } from "react-redux";
import Account from "../../compoments/Account";
import EditName from "../../compoments/EditName"
import Button, { BUTTON_TYPES } from "../../composants/Button"

function User() {
    const account = [
        {   
            "id" : "a1",
            "name" : "Checking",
            "balance" : "2,082.79",
            "multiplier" : "8349",
            "description" : "Available Balance"
        },
        {
            "id" : "a2",
            "name" : "Savings",
            "balance" : "10,928.42",
            "multiplier" : "6712",
            "description" : "Available Balance"
        },
        {
            "id" : "a3",
            "name" : "Credit Card",
            "balance" : "184.30",
            "multiplier" : "8349",
            "description" : "Current Balance"
        }
    ];
    const dispatch = useDispatch();
    const open = useSelector((state) => state.user.openedit);
    
    return (
        <main className="main bg-dark">
            <div className="header">
            {!open ? 
                <div>
                    <h1>Welcome back<br />Tony Jarvis!</h1>
                    <Button class="button edit-button" type={BUTTON_TYPES.DEFAULT} content="Edit Name" click={() => {dispatch({ type: "toggle"})}} /> 
                </div>
                : 
                <EditName />
            }
            </div>
            <h2 className="sr-only">Accounts</h2>
            {account.map((account) => (
                <Account 
                    key={account.id}
                    title={account.name}
                    multiplier={account.multiplier}
                    balance={account.balance}
                    content={account.description}
                />
            ))}
        </main>
    )
  }
  
  export default User