"use client";
import { useState, useContext } from "react";
import { Button, Typography, Paper, Box, TextField } from "@mui/material";
import { keyframes } from "@emotion/react";

import "./chat.css";

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

export default function ChatArea() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "user", text: `You: ${inputValue}`, id: Date.now() },
      ]);

      try {
        const response = await fetch("/api/chatai", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: [
              {
                role: "system",
                content:
                  "You are a wise and mysterious anime character. Respond to each message with the calmness and wisdom of a seasoned anime mentor.",
              },
              { role: "user", content: inputValue },
            ],
          }),
        });

        const data = await response.json();

        setMessages((prevMessages) => [
          ...prevMessages,

          { role: "ai", text: `AI: ${data.message}`, id: Date.now() },
        ]);
      } catch (error) {
        console.error("Error:", error);
      }

      setInputValue(""); // Clear input field after submission
    }
  };

  return (
    <div className="chat-container">
      <div className="message-area">
        {messages.length > 0 ? (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`message ${
                msg.role === "user" ? "user-message" : "ai-message"
              }`}
            >
              {msg.text}
            </div>
          ))
        ) : (
          <div className="no-messages">No messages yet.</div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="input-form">
        <TextField
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className="message-input"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
      </form>
    </div>
  );
}
