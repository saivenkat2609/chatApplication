import Dialog from '@mui/material/Dialog';

import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { useContext } from 'react';
import { AccountContext } from '../context/owner';
import { addUser } from '../service/api';
import "./dialog.css";
const dialog={
    height:"60%",
    width:"70vh",
    padding: "58px 52px 52px",
    position: "relative",
    boxSizing: "border-box",
    overflow:"none",
    left:"260px",
    
};
const Ldialog=()=>{
    const {setaccount}=useContext(AccountContext);
    const onLoginSuccess=async(res)=>{
        const decode=jwt_decode(res.credential);
        setaccount(decode);
        await addUser(decode);
    }
    const onLoginError=(res)=>{
        console.log('login failed',res);
    }
    return(
        <Dialog open={true} PaperProps={{sx:dialog}} hideBackdrop={true}>
            <div className="dialog-container">
                    
            </div>
            <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError}/>
        </Dialog>
    

    )
}
export default Ldialog;