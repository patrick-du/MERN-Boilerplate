import React from 'react';

const TerminalTitleBar = () => {
  return (
    <div className="title-bar">
      <div className="buttons">
        <div className="mac-btn close" />
        <div className="mac-btn minimize" />
        <div className="mac-btn zoom" />
      </div>
    </div>
  );
};

export default TerminalTitleBar;
