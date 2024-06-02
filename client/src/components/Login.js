import "./lstyle.css";
import Ldialog from "./account/dialog";
import App from "./chat/App";
import chat from "./account/chat.png";
import { useContext } from "react";
import { AccountContext } from "./context/owner";
const Login =()=> {
    const {account} = useContext(AccountContext);
    return ( <>
        {
            account?
            <div className="login_bot">
            <div className = "clogin_top" ></div>
            <App/>
        </div>:
        <>
        
            <div className="logpic">
                <div className="test">
            <img src={chat} alt="logo" className="dialog-imagel"></img>
            </div>
                <Ldialog/>
            </div>
            
            
    </>
         
}
        </>
    )
}
export default Login;