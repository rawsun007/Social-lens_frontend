import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Message from "./Message";
import "../index.css";
import "../App.css";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatWindowRef = useRef(null);

  // Handle the send message functionality
  const handleSendMessage = async (e) => {
    e.preventDefault();

    // Prevent sending an empty message
    if (!userInput.trim()) return;

    // User's message handling
    const userMessage = { sender: "user", text: userInput };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setUserInput(""); // Clear the input field
    setIsTyping(true); // Show "Bot is typing..."

    try {
      const response = await axios.post(
        " https://social-lens-backend.onrender.com/chat/analyze",
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
      // If there is an error fetching from the bot, show this message
      const errorMessage = {
        sender: "bot",
        text: "Error: Unable to fetch response from the bot.",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsTyping(false); // Hide "Bot is typing..."
    }
  };

  // Auto scroll to the bottom when new messages are added
  useEffect(() => {
    chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
  }, [messages]);

  return (
    <>
      <div className="chat-container">
        <div
          className="chat-window bg-gradient-to-b from-purple-900/20 to-black z-0"
          ref={chatWindowRef}
        >
          {messages.map((msg, index) => (
            <Message key={index} sender={msg.sender} text={msg.text} />
          ))}
          {isTyping && (
            <div className="message bot">
              <div className="message-bubble typing-indicator">
                Bot is typing...
              </div>
            </div>
          )}
        </div>

        <form
          onSubmit={handleSendMessage}
          className="chat-form flex items-center justify-center mb-3"
        >
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-info w-full rounded"
            value={userInput} // Bind the input value
            onChange={(e) => setUserInput(e.target.value)} // Update state on change
          />
          <button
            type="submit" // Specify button type for form submission
            className="btn btn-outline btn-info ml-3"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default Chat;
