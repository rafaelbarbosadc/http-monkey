import styled from "styled-components";

export const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
`;

export const Item = styled.div`
  width: 10vw;
  height: 10vw;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
`;
