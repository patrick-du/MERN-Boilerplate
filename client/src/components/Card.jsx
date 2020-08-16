import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  width: 80%;
  background: ${(props) => props.color};
  margin: auto auto 20px auto;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  .logo {
    width: 70px;
    height: 70px;
    border-radius: 15px;
  }

  .card-name {
    margin: 0;
    text-align: left;
    flex-basis: auto;
    flex: 1;
  }
`;

const Card = ({ img, txt, href, color, fcn }) => {
  return (
    <StyledCard onClick={() => (fcn ? fcn() : window.location = href)} color={color}>
      <div
        className="logo"
        style={{
          background: `url("${img}") no-repeat center center / 50% ${color}`}}
      />
      <p className="card-name">{txt}</p>
    </StyledCard>
  );
};

export default Card;
