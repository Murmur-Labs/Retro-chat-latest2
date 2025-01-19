import React from 'react';
    import './Sidebar.css';

    function Sidebar({ users }) {
      return (
        <div className="sidebar">
          <div className="sidebar-header">
            <div className="tokens">100 tokens</div>
            <div className="conversations">CONVERSATIONS</div>
          </div>
          <div className="new-conversation">
            <button>NEW CONVERSATION</button>
          </div>
        </div>
      );
    }

    export default Sidebar;
