import React from 'react';
    import './MessageList.css';

    function MessageList({ messages, samplePrompts, onSamplePromptClick }) {
      const welcomeMessage = messages.find(message => message.isWelcomeMessage);
      const userMessages = messages.filter(message => !message.isWelcomeMessage);

      return (
        <div className="message-list">
          {welcomeMessage && (
            <div className="welcome-message-container">
              <div className="message welcome-message">
                <div className="message-content">
                  {welcomeMessage.avatar && (
                    <span className="message-avatar left">
                      <img src="https://github.com/Murmur-Labs/Images/blob/main/ai_avatar9_small.png?raw=true" alt="AI Agent Avatar" />
                    </span>
                  )}
                  <div className="text-content">
                    <p>{welcomeMessage.content}</p>
                    <div className="timestamp">{welcomeMessage.timestamp}</div>
                  </div>
                </div>
              </div>
              <div className="sample-prompts-container">
                {samplePrompts.map((prompt, index) => (
                  <button key={index} className="sample-prompt-button" onClick={() => onSamplePromptClick(prompt)}>
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}
          {userMessages.map((message) => (
            <div
              key={message.id}
              className={`message ${message.sent ? 'sent' : 'received'}`}
            >
              <div className="message-content">
                <div className="text-content">
                  <p>{message.content}</p>
                  <div className="timestamp">{message.timestamp}</div>
                </div>
                {message.avatar && (
                  <span className="message-avatar right">
                    <img src="https://github.com/Murmur-Labs/Images/blob/main/ai_avatar9_small.png?raw=true" alt="User Avatar" />
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      );
    }

    export default MessageList;
