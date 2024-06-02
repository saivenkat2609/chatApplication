import{useEffect,useState,useContext} from 'react';
import { getUser } from "../service/api.js";
import { AccountContext } from "../context/owner.jsx";
import Conv from './conv.js';
import "../chat/style.css";

export const Convs = () => {
  const[users,setusers]=useState([]);
  const{account}=useContext(AccountContext);
  useEffect(()=>{
    const fetch=async()=>{
      let response=await getUser();
      setusers(response);
    }
    fetch();
  },[]);
    return(users.map(user=>(
      user.sub!== account.sub&&<><Conv user={user}/></>
      
      
  ))
     
        
    )
}