import React from 'react';
import { StyledTerminal } from './style';
import TerminalTitleBar from './TerminalTitleBar';

const Terminal = () => {
  return (
    <StyledTerminal>
      <TerminalTitleBar />
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
            rel="noopener noreferrer"
          >
            MERN-Stack-Boilerplate
          </a>
        </pre>
        <pre>
          Developer:{' '}
          <a
            href="https://patrickdu.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Patrick Du
          </a>
        </pre>
      </div>
    </StyledTerminal>
  );
};

export default Terminal;
