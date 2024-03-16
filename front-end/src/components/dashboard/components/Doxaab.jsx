import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';  // Import the Tailwind CSS styles
import "./Doxaab.css"

function App() {
  const [inputMsg, setInputMsg] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = () => {
    fetch('http://127.0.0.1:5000/chatget', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ msg: inputMsg }),
    })
      .then(response => response.json())
      .then(data => {
        setResponse(data.response);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
  
 <div className="main">
    <div class="container1">
      <h1 class="header1">Talk to Doxaab!!</h1>
      <textarea
        value={inputMsg}
        onChange={(e) => setInputMsg(e.target.value)}
        className="text"
        rows="4"
        placeholder="Type your message..."
      ></textarea>
      <button
        onClick={sendMessage}
        className="button1 "
      >
        Send Message
      </button>
      <div className="bottom">
        <strong className="bottom-text">Doxaab  :</strong> {response}
      </div>
    </div>
 </div>
  );
}

export default App;
