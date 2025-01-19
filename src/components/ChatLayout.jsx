import React, { useState, useEffect } from 'react';
    import MessageList from './MessageList';
    import MessageInput from './MessageInput';
    import Sidebar from './Sidebar';
    import AgentProfile from './AgentProfile';
    import './ChatLayout.css';

    const initialMessages = [
      {
        id: '1',
        sender: 'Pydantic AI Expert',
        content: 'I am an expert at Pydantic AI with the entire documentation at my disposal. Ask me anything about this awesome Python AI agent framework!',
        timestamp: 'less than a minute ago',
        sent: false,
        isWelcomeMessage: true,
        avatar: 'https://github.com/Murmur-Labs/Images/blob/main/ai_avatar9_small.png?raw=true',
      },
    ];

    const samplePrompts = [
      'What are the supported models?',
      'Give me the weather agent example from the docs.',
      'How do I define a tool for my agent?',
    ];

    const initialUsers = [
      { id: '1', name: 'User 1', online: true, avatar: 'https://placekitten.com/50/50' },
      { id: '2', name: 'User 2', online: false, avatar: 'https://placekitten.com/51/51' },
      { id: '3', name: 'User 3', online: true, avatar: 'https://placekitten.com/52/52' },
    ];

    function ChatLayout() {
      const [messages, setMessages] = useState(initialMessages);
      const [users, setUsers] = useState(initialUsers);

      const handleSendMessage = (newMessage) => {
        const message = {
          id: String(messages.length + 1),
          sender: 'User',
          content: newMessage,
          timestamp: 'just now',
          sent: true,
          avatar: 'https://placekitten.com/50/50',
        };
        setMessages([...messages, message]);
      };

      const handleSamplePromptClick = (prompt) => {
        handleSendMessage(prompt);
      };

      useEffect(() => {
        const handleChatMessage = async (event) => {
          if (event.origin === window.location.origin) {
            try {
              const request = await fetch('/chat-message', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(event.data),
              });

              if (request.ok) {
                const response = await request.json();
                const newMessage = {
                  id: String(messages.length + 1),
                  sender: response.sender || 'Pydantic AI Expert',
                  content: response.message,
                  timestamp: response.timestamp || 'just now',
                  sent: false,
                  avatar: 'https://github.com/Murmur-Labs/Images/blob/main/ai_avatar9_small.png?raw=true',
                };
                setMessages((prevMessages) => [...prevMessages, newMessage]);
              } else {
                console.error('Failed to receive message:', request.statusText);
              }
            } catch (error) {
              console.error('Error receiving message:', error);
            }
          }
        };

        window.addEventListener('message', handleChatMessage);

        return () => {
          window.removeEventListener('message', handleChatMessage);
        };
      }, [messages]);

      return (
        <div className="chat-layout">
          <div className="sidebar-container">
            <Sidebar users={users} />
            <AgentProfile />
          </div>
          <div className="chat-container">
            <div className="chat-header">
              <div className="chat-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
                CHAT WITH PYDANTIC AI EXPERT
              </div>
              <div className="chat-actions">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon"><path d="M12 3a9 9 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                <span style={{cursor: 'pointer'}} className="back-to-agents">BACK TO AGENTS</span>
              </div>
            </div>
            <MessageList messages={messages} samplePrompts={samplePrompts} onSamplePromptClick={handleSamplePromptClick} />
            <MessageInput onSendMessage={handleSendMessage} />
            <div className="footer-container">
              <div className="footer">
                HOSTED BY OTTOMATOR | MADE BY COLE MEDIN
              </div>
            </div>
          </div>
        </div>
      );
    }

    export default ChatLayout;
