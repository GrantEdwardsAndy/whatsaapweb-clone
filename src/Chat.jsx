import SearchOutlined from '@mui/icons-material/SearchOutlined'
import AttachFile from '@mui/icons-material/AttachFile'
import { Avatar, IconButton } from '@mui/material'
import React, { useState, useEffect} from 'react'
import './Chat.css'
import MoreVert from '@mui/icons-material/MoreVert'
import MicIcon from '@mui/icons-material/Mic'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'

const Chat = () => {
    const [input, setInput] = useState("")
    const [seed, setSeed] = useState('')
    
    useEffect(() => {
        
        return () => {
            setSeed(Math.floor(Math.random() * 5000));
        };
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        setInput('')
    }

    return (
      <div className='chat'>
          <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                
                <div className="chat_headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at....</p>
                </div>

                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>

          </div>

            <div className="chat_body">
                <p className={`chat_message ${true && "chat_receiver"}`}>
                 <span><div className="chat_name">Grant Edwards</div> </span>

                    hey guys

                    <span className='chat_timestamp'>3:52pm</span>
                </p>              
          </div>

          <div className="chat_footer">
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder='Type a message'/>
                    <button onClick={sendMessage}>Send a message</button>
                </form>
                <MicIcon />
          </div>
    </div>
  )
}

export default Chat