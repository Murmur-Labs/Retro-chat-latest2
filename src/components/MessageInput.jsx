import React, { useState } from 'react';
    import './MessageInput.css';
    import { v4 as uuidv4 } from 'uuid';
    import { IoSend } from 'react-icons/io5';

    function MessageInput({ onSendMessage }) {
      const [message, setMessage] = useState('');

      const handleInputChange = (event) => {
        setMessage(event.target.value);
      };

      const handleKeyDown = async (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
          event.preventDefault(); // Prevent newline in input
          if (message.trim()) {
            // Send message to n8n webhook
            try {
              const response = await fetch(
                'https://n8n-kngoxnvl.az-csprod1.cloud-station.io/webhook-test/chat-webhook',
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    message: message,
                    sender: 'User', // Or get the user's name
                    timestamp: new Date().toISOString(),
                  }),
                }
              );

              if (response.ok) {
                console.log('Message sent to n8n successfully!');
                // Optionally, you can handle the response from n8n here
              } else {
                console.error('Failed to send message to n8n:', response.statusText);
              }
            } catch (error) {
              console.error('Error sending message to n8n:', error);
            }

            onSendMessage(message); // Keep the local message display
            setMessage('');
          }
        }
      };

      return (
        <form className="message-input" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button type="submit">
            <IoSend />
          </button>
        </form>
      );
    }

    export default MessageInput;
