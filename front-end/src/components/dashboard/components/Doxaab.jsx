import React, { useState } from "react";
import "tailwindcss/tailwind.css"; // Import the Tailwind CSS styles

function App() {
  const [inputMsg, setInputMsg] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = () => {
    fetch("http://127.0.0.1:5000/chatget", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ msg: inputMsg }),
    })
      .then((response) => response.json())
      .then((data) => {
        setResponse(data.response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Talk to Doxaab!!</h1>
      <textarea
        value={inputMsg}
        onChange={(e) => setInputMsg(e.target.value)}
        className="w-full p-4 border border-gray-300 mb-4"
        rows="4"
        placeholder="Type your message..."
      ></textarea>
      <button
        onClick={sendMessage}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Send Message
      </button>
      <div className="mt-4">
        <strong className="text-lg font-bold">Doxaab :</strong> {response}
      </div>
    </div>
  );
}

export default App;
