import React, { useEffect, useRef, useState } from "react";
import Message from "./Message.jsx";
import MessageInput from "./MessageInput.jsx";
import axios from 'axios';

const ChatBox = ({ rootUrl }) => {
    const userData = document.getElementById('main')?.getAttribute('data-user');
    const user = userData ? JSON.parse(userData) : null;
    const webSocketChannel = `private-channel.${user?.id || 'everyone'}`;

    const [messages, setMessages] = useState([]);
    const scroll = useRef(null);

    const scrollToBottom = () => {
        scroll.current?.scrollIntoView?.({ behavior: "smooth" });
    };

    const connectWebSocket = () => {
        if (!window.Echo) {
            console.error('Echo is not initialized');
            return;
        }

        window.Echo.private(webSocketChannel)
            .listen('GotMessage', async (e) => {
                await getMessages();
            })
            .error((error) => {
                console.error('WebSocket Error:', error);
            });
    }

    const getMessages = async () => {
        try {
            const response = await axios.get(`${rootUrl}/messages`);
            setMessages(response.data);
            setTimeout(scrollToBottom, 100);
        } catch (err) {
            console.error('Error fetching messages:', err);
        }
    };

    useEffect(() => {
        if (user) {
            getMessages();
            connectWebSocket();
        }

        return () => {
            window.Echo?.leave(webSocketChannel);
        }
    }, [user]);

    if (!user) return <div>Loading user data...</div>;

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">Chat Box</div>
                    <div className="card-body" style={{height: "500px", overflowY: "auto"}}>
                        {messages?.map((message) => (
                            <Message key={message.id} 
                                   userId={user.id} 
                                   message={message} />
                        ))}
                        <span ref={scroll}></span>
                    </div>
                    <div className="card-footer">
                        <MessageInput rootUrl={rootUrl} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;