import React, { useRef, useEffect, useState } from 'react';
import Head from 'next/head';
import styles from './Home.module.css';
import { initializeThreeJS } from '../utils/app.js';

export default function Home() {
    const mount = useRef(null);
    const [chatHistory, setChatHistory] = useState([]);

    useEffect(() => {
        if (mount.current) {
            const mountPoint = mount.current;
            initializeThreeJS(mountPoint);
        }
    }, []);

    useEffect(() => {
        // Load chat history from localStorage when the component mounts
        const savedChatHistory = localStorage.getItem('chatHistory');
        if (savedChatHistory) {
            setChatHistory(JSON.parse(savedChatHistory));
        }

        if (mount.current) {
            const mountPoint = mount.current;
            initializeThreeJS(mountPoint);
        }
    }, []);

    useEffect(() => {
        // Save chatHistory to localStorage whenever it changes
        localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
    }, [chatHistory]);

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleKeyPress = (event) => {
        // Check if the Enter key is pressed
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };

    const [userInput, setUserInput] = useState('');

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
                <div className={styles.chatHistory}>
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
                    placeholder="Message OncologyChat" // Placeholder text added
                />
                <button
                    onClick={handleSubmit}
                    className={styles.sendButton}
                >
                    Send
                </button>
            </div>
        </div>
    );
}
