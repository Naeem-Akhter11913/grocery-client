import { useState, useEffect } from "react";
import Image from "next/image";
import './chat.css'

interface Message {
  id: number;
  text: string;
  sender: "user" | "store";
  time: string;
}

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! Do you have organic butter?", sender: "user", time: "10:30 AM" },
    { id: 2, text: "Yes! We have fresh stock available. 😊", sender: "store", time: "10:31 AM" }
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMsg: Message = {
      id: Date.now(),
      text: input,
      sender: "user",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };
    setMessages([...messages, newMsg]);
    setInput("");

    // Simulate store typing
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "We can deliver it tomorrow!",
          sender: "store",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        }
      ]);
    }, 1500);
  };

  return (
    <div className="d-flex flex-column h-100">
      <div className="flex-grow-1 p-3 overflow-auto chat-bg chat-bg-rounded" style={{ height: "calc(24vh - 60px)" }}>
        {messages.map((msg) => (
          <div key={msg.id} className={`d-flex mb-3 ${msg.sender === "user" ? "justify-content-end" : "justify-content-start"}`}>
            {msg.sender === "store" && (
              <Image src="/contact-store/image-user.png" alt="Store" width={35} height={35} className="rounded-circle me-2" />
            )}

            <div className="d-flex flex-column">
              <div className={`chat-bubble ${msg.sender}`}>
                {msg.text}
              </div>
              <small className="text-muted">{msg.time}</small>
            </div>

            {msg.sender === "user" && (
              <Image src="/contact-store/image-store.png" alt="User" width={35} height={35} className="rounded-circle ms-2" />
            )}
          </div>

        ))}

        {typing && (
          <div className="d-flex align-items-center text-muted small ms-1">
            <span className="typing-dots me-1"></span> Store is typing...
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-2 border-top d-flex chat-bg chat-bg-bottom-rounded">
        <input
          type="text"
          className="form-control me-2 rounded-pill"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button className="btn btn-success rounded-pill px-4" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
