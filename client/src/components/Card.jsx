import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  background: white;
  border-radius: 2px;
  border: ${(props) => props.color};
  display: inline-block;
  margin-right: 2em;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  transition: all ease-in-out 0.6s;

  .card-name {
    margin: 0;
    text-align: left;
    padding: 5px 0px 5px 10px;
  }

  &:hover {
    transform: translateY(-10px);
  }
`;

const Card = ({ img, name, href, color }) => {
  const NAME = name.charAt(0).toUpperCase() + name.substring(1, name.length);
  return (
    <StyledCard style={{ border: `` }} onClick={() => (window.location = href)}>
      <p className="card-name">{NAME}</p>
      <div
        style={{
          minHeight: 100,
          minWidth: 100,
          background: `url("${img}") no-repeat center center / 50% ${color}`,
        }}
      />
    </StyledCard>
  );
};

export default Card;
