import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import LogoutIcon from '../assets/logout.svg';
import TerminalTitleBar from './TerminalTitleBar';
import { StyledTerminal } from './style';
import logOut from '../utils/logOut';

const StyledAuthenticatedUser = styled.div`
  .terminalTitle {
    font-size: 16px;
    font-weight: bold;
  }
`;

const AuthenticatedUser = ({ user }) => {
  return (
    <StyledAuthenticatedUser>
      <p className="pageTitle"> Welcome {user.displayName}</p>
      <StyledTerminal>
        <TerminalTitleBar />
        <div className="content">
          <pre className="terminalTitle">
            Personal{' '}
            {user.provider[0].toUpperCase() + user.provider.substring(1)}{' '}
            Account Information
          </pre>
          {Object.keys(user).map((key) => {
            return (
              <pre>
                <b>{key}</b>: {user[key]}
              </pre>
            );
          })}
          <pre></pre>
        </div>
      </StyledTerminal>
      <Card
        img={LogoutIcon}
        txt={'Logout'}
        color={'white'}
        fcn={() => logOut()}
      />
    </StyledAuthenticatedUser>
  );
};

export default AuthenticatedUser;
