import React, { useContext } from 'react';
import UserProvider from '../../contexts/UserProvider';
import styled from 'styled-components';
import AuthenticatedUser from '../../components/AuthenticatedUser';
import UnauthenticatedUser from '../../components/UnauthenticatedUser';

const StyledDashboard = styled.div`
  width: 50%;
  margin: 0 auto;
  text-align: center;

  .pageTitle {
    font-weight: 400;
    font-size: 35px;
  }
`;

const Dashboard = () => {
  const userData = useContext(UserProvider.Context);
  return (
    <StyledDashboard>
      {userData ? (
        <AuthenticatedUser user={userData} />
      ) : (
        <UnauthenticatedUser />
      )}
    </StyledDashboard>
  );
};

export default Dashboard;
