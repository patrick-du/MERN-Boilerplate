import React from 'react';
import Terminal from '../../components/Terminal';
import CardList from '../../components/CardList';
import styled from 'styled-components';

const StyledHome = styled.div`
  width: 50%;
  margin: 0 auto;
  text-align: center;

  .pageTitle {
    font-weight: 400;
    font-size: 35px;
  }

  .page-body {
    font-size: 20px;
  }

  &:hover {
    transform: translateY(-10px);
  }
`;

const Home = () => {
  return (
    <StyledHome>
      <p className="pageTitle">Simple OAuth with Node.js</p>
      <p className="page-body">
        Passport.js contains support for over 500+ Get started today with just a
        username and password for apps like Facebook, Instagram, and Google
      </p>
      <Terminal userData={"passport.authenticate('google')"} selected="All" />
      <br />
      <CardList />
      <br />
    </StyledHome>
  );
};
export default Home;
