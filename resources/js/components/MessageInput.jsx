import React, { useState } from "react";
import axios from 'axios';

const MessageInput = ({ rootUrl }) => {
    const [message, setMessage] = useState("");
    const [isSending, setIsSending] = useState(false);

    const sendMessage = async (e) => {
        e.preventDefault();
        
        if (!message.trim()) {
            alert("Please enter a message!");
            return;
        }

        setIsSending(true);
        try {
            await axios.post(`${rootUrl}/message`, { text: message });
            setMessage("");
        } catch (err) {
            console.error('Error sending message:', err);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <form onSubmit={sendMessage} className="input-group">
            <input 
                onChange={(e) => setMessage(e.target.value)}
                autoComplete="off"
                type="text"
                className="form-control"
                placeholder="Message..."
                value={message}
                disabled={isSending}
            />
            <div className="input-group-append">
                <button 
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSending}
                >
                    {isSending ? 'Sending...' : 'Send'}
                </button>
            </div>
        </form>
    );
};

export default MessageInput;