
import { useContext } from "react";
import { AccountContext } from "../context/owner";
export const Emptychat = () => {
    const {account}=useContext(AccountContext);
        return ( <img src ={account.picture}></img>)
        }