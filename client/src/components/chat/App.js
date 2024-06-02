import React from 'react';
import "./style.css";
import SearchIcon from '@mui/icons-material/Search';
import GroupsIcon from '@mui/icons-material/Groups';
import FilterListIcon from '@mui/icons-material/FilterList';
import FilterTiltShiftIcon from '@mui/icons-material/FilterTiltShift';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Chatbox from '../right/chatbox';
import Dialog from '@mui/material/Dialog';
import { useContext } from 'react';
import { AccountContext } from '../context/owner';
import {Menu,MenuItem} from '@mui/material';
import {useState} from 'react';
import { Convs } from '../conversation/convs.js';
import { Emptychat } from '../conversation/empty';
function App(){
  const dialog={
  height:"95%",
  width:"100%",
  maxWidth:"100%",
  maxHeight:"100%",
  marginLeft:"16px",
  marginRight:"16px",
  borderRadius:0,
  boxShadow:"none",
  overflow:"hidden"}
  const {account}=useContext(AccountContext);

  const[open,setopen]=useState(null);
  const handleClose=()=>{
    setopen(null);
  }
  const handleClick=(e)=>{
    setopen(e.currentTarget);
  }
  
  const {person}=useContext(AccountContext);
  return (
    <Dialog open={true} PaperProps={{sx:dialog}} hideBackdrop={true}>
    <div className="sect">
      <div className="leftbar">
        <div className="topbar">
          <div>
            <img className="prodim" src={account.picture} alt="not found"></img>
          </div>
          <div className="comdim">
            <GroupsIcon></GroupsIcon>
          </div>
          <div className="stadim"><FilterTiltShiftIcon></FilterTiltShiftIcon></div>
          <div className="notdim"><MarkUnreadChatAltIcon></MarkUnreadChatAltIcon></div>
          <div className="mendim">
            <MoreVertIcon onClick={handleClick}/>
            <Menu
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorE1={null}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
        <MenuItem onClick={handleClose} className="options">New group</MenuItem>
        <MenuItem onClick={handleClose} className="options">New Community</MenuItem>
        <MenuItem onClick={handleClose} className="options">Stared messages</MenuItem>
        <MenuItem onClick={handleClose} className="options">Select chats</MenuItem>
        <MenuItem onClick={handleClose} className="options">Settings</MenuItem>
        <MenuItem onClick={handleClose} className="options">Logout</MenuItem>
      </Menu>
          </div>
        </div>
        <div className="searchbox">
          <div className="searchtxt">
            <SearchIcon></SearchIcon>
            <div><input className="searchcon" type="text" placeholder="Search or start new chat"></input></div>
          </div>
          <div className="fildim"><FilterListIcon></FilterListIcon></div>
        </div>
        <Convs></Convs>
      </div>
      {Object.keys(person).length?<div className="rightbar"><Chatbox/></div>:<Emptychat/>}
      
    </div>
    </Dialog>
  )
}
export default App;