import { useContext } from "react";
import { AccountContext } from "../context/owner"; 
import {Box,Typography,styled} from '@mui/material';
const Own=styled(Box)`
    background: #dcf8c6;
    max-width: 60%;
    margin-left: auto;
    padding: 5px;
    width: fit-content;
    display: flex;
    border-radius: 10px;
    word-break: break-word;`
const Own1=styled(Box)`
    background-color:aliceblue ;
    max-width: 60%;
    padding: 5px;
    width: fit-content;
    display: flex;
    border-radius: 10px;
    word-break: break-word;`
const Text=styled(Typography)`
    font-size:14px;
    padding:0 25px 0 5px;`
export const Message=({msg})=>{
    const {account}=useContext(AccountContext);
    return (<>
    {
        account.sub===msg.senderId ?
            <Own>
                <Text>{msg.text}</Text>
            </Own>
        :
            <Own1>
                <Text>{msg.text}</Text>
            </Own1>
        }
        </>
        )
}