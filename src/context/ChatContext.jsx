import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [chats, setChats] = useState({});
    const apiUrl = import.meta.env.VITE_API_URL || 'https://fast-food-final.onrender.com';

    const fetchChats = useCallback(async () => {
        try {
            const res = await fetch(`${apiUrl}/get-chats`);
            const data = await res.json();
            setChats(data);
        } catch (e) {
            console.error("Error fetching chats:", e);
        }
    }, [apiUrl]);

    useEffect(() => {
        fetchChats();
        const interval = setInterval(fetchChats, 5000); // Poll every 5 seconds
        return () => clearInterval(interval);
    }, [fetchChats]);

    const sendMessage = async (userId, message, sender = 'user', userName = null) => {
        try {
            const res = await fetch(`${apiUrl}/send-chat-message`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId, message, sender, userName: userName || userId })
            });
            const data = await res.json();

            // Re-fetch to sync
            fetchChats();
            return data.message;
        } catch (e) {
            console.error("Error sending message:", e);
        }
    };

    const markAsRead = async (userId) => {
        try {
            await fetch(`${apiUrl}/mark-chat-read`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId })
            });
            fetchChats();
        } catch (e) {
            console.error("Error marking as read:", e);
        }
    };

    const deleteChat = (userId) => {
        // Backend deletion not implemented yet, just local for now or we could add endpoint
        setChats(prev => {
            const newChats = { ...prev };
            delete newChats[userId];
            return newChats;
        });
    };

    return (
        <ChatContext.Provider value={{ chats, sendMessage, markAsRead, deleteChat, fetchChats }}>
            {children}
        </ChatContext.Provider>
    );
};

export const useChat = () => {
    const context = useContext(ChatContext);
    if (!context) {
        throw new Error('useChat must be used within a ChatProvider');
    }
    return context;
};
