import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Message from "./Message"; // Import the Message component
import "../index.css";
import "../App.css";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatWindowRef = useRef(null);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!userInput.trim()) return;

    const userMessage = { sender: "user", text: userInput };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setUserInput(""); // Clear the input field
    setIsTyping(true);

    try {
      const response = await axios.post(
        "https://social-lens-backend.onrender.com/chat/analyze",
        {
          message: userInput,
        }
      );

      const botResponse =
        response.data.outputs[0]?.outputs[0]?.results?.message?.text ||
        "No response from the bot.";

      const botMessage = { sender: "bot", text: botResponse };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      const errorMessage = {
        sender: "bot",
        text: "Apologies for the inconvenience, but we’re currently unable to retrieve a response from the bot. We deeply appreciate your patience and kindly ask you to try again shortly. Thank you for your understanding.",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <div className="main-container">
        <div className="chat-interface text-lg">
          <div className="chat-header">
            <div className="header-avatar">
              <div className="bot-eye" />
            </div>
            <h2 className="font-bold text-2xl text-white">
              Social Media Analyst
            </h2>
          </div>
          <div className="messages-container" ref={chatWindowRef}>
            {messages.map((message, index) => (
              <Message key={index} sender={message.sender} text={message.text} />
            ))}
            {isTyping && <div className="bot rounded">Bot is typing...</div>}
          </div>
          <div className="input-container">
            <form className="input-group" onSubmit={handleSendMessage}>
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type your message..."
                className="chat-input text-lg"
              />
              <button type="submit" className="send-btn">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
