import React from 'react';
import styled from 'styled-components';

const StyledTerminal = styled.div`
  width: 80%;
  margin: 0 auto;
  background: white;
  border-radius: 6px;

  .title-bar {
    background-color: white;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    color: #4d494d;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .buttons {
    float: left;
    padding-left: 8px;
    padding-top: 8px;
    line-height: 0;
  }

  .mac-btn {
    font-size: 9px;
    width: 11px;
    height: 11px;
    display: inline-block;
    border-radius: 50%;
  }

  .close {
    background: #ff5c5c;
    border: 1px solid #ff5c5c;
    margin-left: 4px;
  }

  .minimize {
    background: #ffbd4c;
    border: 1px solid #ffbd4c;
    margin-left: 4px;
  }

  .zoom {
    background: #00ca56;
    border: 1px solid #00ca56;
    margin-left: 4px;
  }

  .content {
    background-color: #eeeeee;
    padding: 20px 10px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`;

const Terminal = ({ userData, selected }) => {
  const selectedData = selected === 'All' ? userData : userData[selected];
  const jsonCode = JSON.stringify(selectedData, null, 4);
  return (
    <StyledTerminal>
      <div className="title-bar">
        <div className="buttons">
          <div className="mac-btn close" />
          <div className="mac-btn minimize" />
          <div className="mac-btn zoom" />
        </div>
        <p style={{ textAlign: 'center', margin: 0 }}>json-terminal</p>
      </div>
      <div className="content">
        <pre>{jsonCode}</pre>
      </div>
    </StyledTerminal>
  );
};

export default Terminal;
