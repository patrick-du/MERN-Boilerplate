import React from 'react';
import Terminal from '../../components/Terminal';
import styled from 'styled-components';

const StyledProfile = styled.div`
  width: 50%;
  margin: 0 auto;
  text-align: center;

  .pageTitle {
    font-weight: 400;
    font-size: 35px;
  }
`;

const Profile = () => {
  return (
    <StyledProfile>
      <p className="pageTitle">OAuth 2.0 Boilerplate</p>
      <Terminal />
    </StyledProfile>
  );
};

export default Profile;
