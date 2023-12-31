import React, { useState, useEffect } from 'react';
import { Avatar } from '@material-ui/core';
import './SidebarChat.css';
import db from '../../firebase/firebase';
import { Link } from 'react-router-dom';

interface SidebarChatProps {
    id?: string;
    name?: string;
    addNewChat?: boolean;
}

function SidebarChat({ id, name, addNewChat }: SidebarChatProps) {
    const [speed, setSpeed] = useState<number | string>("");
    const [messages, setMessages] = useState<any[]>([]);

    useEffect(() => {
        if (id) {
            db.collection('rooms')
                .doc(id)
                .collection('messages')
                .orderBy('timestamp', 'desc')
                .onSnapshot((snapshot) =>
                    setMessages(
                        snapshot.docs.map((doc) => doc.data())
                    )
                );
        }
    }, [id]);

    useEffect(() => {
        setSpeed(Math.floor(Math.random() * 5000).toString());
    }, []);

    const createChat = () => {
        const roomName = prompt("Please Enter name for Components room");

        if (roomName) {
            db.collection('rooms').add({
                name: roomName,
            });
        }
    };

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className='sidebarChat'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${speed}.svg`} />
                <div className='sidebarChat__info'>
                    <h2>{name}</h2>
                    <p>{messages[0]?.message}</p>
                </div>
            </div>
        </Link>
    ) : (
        <div onClick={createChat} className='sidebarChat'>
            <h1>Add new Chat</h1>
        </div>
    );
}

export default SidebarChat;