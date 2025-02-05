import { useState, useEffect } from "react";


export default function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" }
  ]);
  const [input, setInput] = useState("");
  const [botResponse, setBotResponse] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/hello/")
      .then(response => response.json())
      .then(data => setBotResponse(data.message))
      .catch(error => console.error("Error fetching bot response:", error));
  }, []);

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: botResponse || "I'm just a demo bot!" }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-4 shadow-lg bg-white rounded-lg">
        <div className="h-80 overflow-y-auto border border-gray-300 p-2 rounded-md bg-white shadow-md">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 my-1 rounded-lg max-w-[75%] ${msg.sender === "user" ? "self-end bg-blue-500 text-white" : "self-start bg-gray-200 text-black"}`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="flex gap-2 mt-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-2 border border-gray-300 rounded-md text-black"
          />
          <button
            onClick={sendMessage}
            className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
