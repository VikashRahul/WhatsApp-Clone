import { Avatar,IconButton } from '@mui/material';
// import AttachFile from '@mui/icons-material/AttachFile';
// import SearchOutlined from '@mui/icons-material/SearchOffOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { AttachFile, SearchOutlined, MoreVertIcon} from '@mui/icons-material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SearchIcon from '@mui/icons-material/Search';

import React, {useEffect, useState} from 'react';
import './Chat.css';
import { AttachFile, SearchOutlined } from '@mui/icons-material';

const Chat = () => {

    const[seed, setSeed] = useState("");
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    return (
        <div className="chat">
            <div className="chat__header">
              <Avatar src={'https://avatars.dicebear.com/api/human/${seed}.svg'}/>

              <div className="chat__headerinfo">
                  <h3>room name</h3>
                  <p>last seen...</p>
              </div>

              <div className="chat__headerRight">
              <IconButton>
                     <AttachFileIcon />
                  </IconButton>
                  <IconButton>
                     <MoreVertIcon  />
                  </IconButton>
                  <IconButton>
                     <SearchOutlined/>
                  </IconButton>
              </div>
            </div>
            <div className="chat__body">

            </div>
            <div className="chat__footer">

            </div>
            
        </div>
    )
}

export default Chat
