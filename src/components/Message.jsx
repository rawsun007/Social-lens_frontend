import React from "react";
import "../App.css"; // Ensure this file exists and has the correct styles

function Message({ sender, text }) {
  // Function to render formatted text
  const renderMessageText = (text) => {
    // Convert '**bold**' to <strong>bold</strong>
    const formattedText = text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Bold text
      .replace(/\n/g, "<br />") // Newlines
      .replace(/• (.*?)\n/g, "<ul><li>$1</li></ul>"); // Bullet points using '•'

    return { __html: formattedText };
  };

  // Render the message with sender-based styles and formatted content
  return (
    <div className={`message ${sender}`}>
      <div
        className={`message-avatar ${
          sender === "bot" ? "bot-avatar" : "user-avatar"
        }`}
      ></div>
      <div
        className="message-bubble"
        dangerouslySetInnerHTML={renderMessageText(text)}
      />
    </div>
  );
}

export default Message;
