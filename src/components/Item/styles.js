import styled from 'styled-components';

export const Container = styled.div`
  width: 10vw;
  height: 10vw;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Code = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const Description = styled.p`
  color: black;
  text-align: center;
  text-transform: capitalize;
`;
