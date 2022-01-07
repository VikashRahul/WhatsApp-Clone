// import { SettingsEthernetRounded } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React, {useState,useEffect} from 'react'
import './SidebarChat.css'


const SidebarChat =({addNewChat}) => {

    const[seed, setSeed] = useState("");
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = () => {
        const roomName = prompt("please enter the name for chat");

        //will add database here
    };

    return !addNewChat ? (
        <div className="sidebarChat">
           <Avatar src={'https://avatars.dicebear.com/api/human/${seed}.svg'}/>
           <div className="sidebar__chatinfo">
               <h2>Room name</h2>
               <p>Last message...</p>
           </div>

        </div>

    ) : (
        <div onClick={createChat} className='sidebarChat'>
            <h2>add new chat</h2>
        </div>
    );
}

export default SidebarChat
