import styled from 'styled-components';

export const StyledTerminal = styled.div`
  width: 80%;
  margin: 0 auto 20px auto;
  border-radius: 15px;
  background: white;
  text-align: left;

  .title-bar {
    background-color: white;
    height: 22px;
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
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  a {
    color: #00ca56;
    text-decoration: dotted;
  }
`;
