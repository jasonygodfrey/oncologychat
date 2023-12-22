// pages/index.js
import React, { useRef, useEffect, useState } from 'react';
import Head from 'next/head';
import styles from './Home.module.css';
import { initializeThreeJS, loadModel } from '../utils/app.js'; // Import the new function

export default function Home() {
    const mount = useRef(null);
    const chatHistoryRef = useRef(null); // Ref for the chat history container
    const [chatHistory, setChatHistory] = useState([]);
    const [userInput, setUserInput] = useState('');




    // Load chat history from localStorage and initialize ThreeJS
    useEffect(() => {
        const savedChatHistory = localStorage.getItem('chatHistory');
        if (savedChatHistory) {
            setChatHistory(JSON.parse(savedChatHistory));
        }

        if (mount.current) {
            const mountPoint = mount.current;
            initializeThreeJS(mountPoint);
        }
    }, []);

    // Save chatHistory to localStorage and scroll to bottom
    useEffect(() => {
        localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
        if (chatHistoryRef.current) {
            const scrollHeight = chatHistoryRef.current.scrollHeight;
            chatHistoryRef.current.scrollTo(0, scrollHeight);
        }
    }, [chatHistory]);

    

    // Handle input change
    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    // Handle key press
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };

    // Handle submit
    const handleSubmit = async () => {
        console.log("handleSubmit called");
        let userMessage = userInput;
        if (!userMessage || userMessage.trim() === '') {
            userMessage = "Ask an oncology question";
        }
        setUserInput('');

        // Send message to backend for GPT-3 processing
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: userMessage })
        });
        const data = await response.json();

        // Add user message and GPT-3 response to chat history
        setChatHistory(prevChatHistory => [
            ...prevChatHistory,
            { sender: 'User', message: userMessage },
            { sender: 'Bot', message: data.reply }
        ]);
    };

    return (
        <div>
            <Head>
                {/* ... Head content ... */}
                </Head>
                
            <div ref={mount} className={styles.threeContainer} />
            <div className={styles.chatContainer}>
                <div ref={chatHistoryRef} className={styles.chatHistory}>
                    {chatHistory.map((chat, index) => (
                        <p key={index}>
                            <strong>{chat.sender}:</strong> {chat.message}
                        </p>
                    ))}
                </div>
                <input
                    type="text"
                    className={styles.inputField}
                    value={userInput}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Message OncologyChat"
                />
                <button
                    onClick={handleSubmit}
                    className={styles.sendButton}
                >
                    Send
                </button>
                <button id="preview-button">Preview 3D Models</button>
            </div>
            
        </div>
        
    );
}