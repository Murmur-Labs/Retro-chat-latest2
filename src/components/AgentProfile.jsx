import React from 'react';
    import './AgentProfile.css';
    import { IoGlobeOutline, IoLogoTwitter, IoPaperPlaneOutline, IoCopyOutline } from 'react-icons/io5';

    function AgentProfile() {
      return (
        <div className="agent-profile">
          <div className="agent-header">
            <div className="agent-avatar">
              <img src="https://github.com/Murmur-Labs/Images/blob/main/ai_avatar9_small.png?raw=true" alt="AI Agent Avatar" />
            </div>
            <div className="agent-name">LeeQuid.Clan</div>
            <div className="agent-followers">13.3k</div>
          </div>
          <div className="agent-large-avatar">
            <div className="large-avatar-placeholder">
              <img src="https://github.com/Murmur-Labs/Images/blob/main/ai_avatar9.jpg?raw=true" alt="AI Agent Avatar" />
            </div>
          </div>
          <div className="agent-social-links">
            <button><IoGlobeOutline /></button>
            <button><IoLogoTwitter /></button>
            <button><IoPaperPlaneOutline /></button>
          </div>
          <div className="agent-trade">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-down"><path d="m3 16 4-4 4 4"/><path d="m3 8 4 4 4-4"/><path d="M21 16 17 12l-4 4"/><path d="M21 8l-4 4-4-4"/></svg>
              Trade
            </button>
          </div>
          <div className="agent-contract">
            <span>Contract</span>
            <span className="contract-address">oraix3...vXRoc4 <button><IoCopyOutline /></button></span>
          </div>
          <div className="agent-description">
            Your personal helper in liquidity management. He
            is always ready to assist you in any situation.
          </div>
        </div>
      );
    }

    export default AgentProfile;
