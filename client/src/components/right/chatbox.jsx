import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import "../chat/style.css";
import { useContext ,useEffect,useState} from 'react';
import { AccountContext } from '../context/owner';
import Footer from '../conversation/footer';
import { getConv } from '../service/api';
import { newMsg,getmsgs } from '../service/api';
import { Message } from './message.jsx';
const Chatbox=()=>{
    const [conv,setconv]=useState([]);
    const [value,setvalue]=useState('');
    const [msgs,setmsgs]=useState([]);
    const [msgflag,setmsgflag]=useState(false);
    const{person}=useContext(AccountContext);
    const {account}=useContext(AccountContext);
    useEffect(()=>{ 
      const getConvdetails=async()=>
    {
      let data=await getConv({senderId:account.sub,receiverId:person.sub});
      setconv(data);
    };
      getConvdetails();
    },[person.sub]);
    useEffect(()=>{ 
      const getmsgdetails=async()=>
    {
      let data=await getmsgs(conv._id);
      setmsgs(data);
    };
    conv._id && getmsgdetails();
    },[person._id,conv._id,msgflag]);
    const sendtext=async(e)=>{
      console.log(e);
      const code=e.keyCode || e.which;
      if(code===13){
        let message={
          senderId:account.sub,
          receiverId:person.sub,
          conversationId:conv._id,
          type:"text",
          text:value
        }
        await newMsg(message);
        setvalue('');
        setmsgflag(prev=>!prev);
      }
    }
    
    return(<>
    <div className="rightbar">
      <div className="about">
        <div><img className="prodim" src={person.picture}></img></div>
        <div className="abtname">{person.name}</div>
        <div className="chatsrc"><SearchIcon></SearchIcon></div>
        <div className="chatmenu"><MoreVertIcon></MoreVertIcon></div>
      </div>
      <div className='msgright'>
      {msgs&&msgs.map(msg=>(<Message msg={msg}/>))}
      </div>
      <Footer sendtext={sendtext} setvalue={setvalue} value={value}/>
    </div></>)
}
export default Chatbox;