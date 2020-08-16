import React from 'react';
import styled from 'styled-components';

const StyledTerminal = styled.div`
  width: 80%;
  margin: 0 auto 20px auto;
  background: white;
  border-radius: 6px;
  text-align: left;

  .title-bar {
    background-color: white;
    height: 22px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
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
    padding: 20px 20px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  a {
    color: #00ca56;
    text-decoration: dotted;
  }
`;

const Terminal = () => {
  return (
    <StyledTerminal>
      <div className="title-bar">
        <div className="buttons">
          <div className="mac-btn close" />
          <div className="mac-btn minimize" />
          <div className="mac-btn zoom" />
        </div>
      </div>
      <div className="content">
        <pre>
          Client-server boilerplate for Google & Facebook OAuth 2.0 via
          Passport.js
        </pre>
        <pre>Developed using React, Node, Express, MongoDB </pre>
        <br />

        <pre>
          Repository:{' '}
          <a
            href="https://github.com/patrick-du/MERN-Stack-Boilerplate"
            target="_blank"
          >
            MERN-Stack-Boilerplate
          </a>
        </pre>
        <pre>
          Developer:{' '}
          <a href="https://patrickdu.com" target="_blank">
            Patrick Du
          </a>
        </pre>
      </div>
    </StyledTerminal>
  );
};

export default Terminal;
