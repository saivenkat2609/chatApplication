import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import "../chat/style.css";
const Footer=({sendtext,setvalue,value})=>{
    
    return (
        <div className="send">
      <InsertEmoticonIcon className="emoji"></InsertEmoticonIcon>
      <AttachFileIcon className="file"></AttachFileIcon>
      <div className="searchtxt1">
        <input className="searchcon1" type="text" placeholder="Type a Message" 
         onChange={(e)=>setvalue(e.target.value)} onKeyPress={(e)=>sendtext(e)} value={value}></input>
      </div>
      <div className="aboutspeak">
        <KeyboardVoiceIcon></KeyboardVoiceIcon>
      </div>
    </div>
    )
}
export default Footer;