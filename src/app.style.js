import styled from 'styled-components';

export const Box = styled.div`
  width: 80rem;

  background-color: silver;
  border: solid yellow 2px;
  border-radius: 2rem;
  box-shadow: 10px 10px 20px yellow;

    div {
    margin-top: 2rem;
    margin-right: 2rem;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly
    }

    p {
    flex: 1;
    font-size: 20px;
    font-weight: bold;

    color: yellow;
    }

    img {
    height: 30rem;
    width: 30rem;
    flex: 1;
    }

    button {
    flex: 1;
    align-self: center;
    padding: 15px;
    margin-top: 2rem;
    margin-bottom: 2rem;

    border: none;
    border-radius: 8px;

    background: yellow;

    cursor: pointer;

    &:hover{
      background: wheat;
      color: black;
    }

    &:active{
      outline: 2px solid yellow;
    }
    }

`
