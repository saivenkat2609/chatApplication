import { createContext,useState } from "react";
export const AccountContext=createContext();

const AccountProvider=({children})=>{
    const [account,setaccount]= useState();
    const[person,setperson]=useState([]);
    return(
        <AccountContext.Provider value={{account,setaccount,person,setperson}}>
            {children}
        </AccountContext.Provider>
    )
}
export default AccountProvider;