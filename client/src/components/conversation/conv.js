import { useContext } from "react";
import "../chat/style.css";
import { AccountContext } from "../context/owner";
import { setConv } from "../service/api";
const Conv=({user})=>{
    const{setperson,account}=useContext(AccountContext);
    const user_cur=async()=>{
        setperson(user);
        await setConv({senderId:account.sub,receiverId:user.sub})
    }
    return(<div onClick={()=>user_cur()}>
    <div className="chatlist">
    <span><img className="chatpro" src={user.picture}></img></span>
    <span className="chatinfo">
      <span className="conname">{user.name}</span>
      <span className="conmsg">{user.message}</span>
    </span>
    <span className="time">{user.time}</span>
  </div>
  </div>)
    
}
export default Conv;