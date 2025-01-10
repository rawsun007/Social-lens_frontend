import React from "react";
import "../App.css";

function Message({ sender, text }) {
  const renderMessageText = (text) => {
    const formattedText = text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Bold text
      .replace(/(?:^|\n)•\s+(.*?)(?=\n|$)/g, "<ul><li>$1</li></ul>") // Bullet points
      .replace(/\n/g, "<br />"); // Newlines
    return { __html: formattedText };
  };

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
