import Item from "../../components/Item";
import { Title } from "../../components/Title/styles";
import styled from "styled-components";

import Link from "next/link";
export default function Home() {
  return (
    <>
      <Title>HTTP Monkey</Title>
      <Container>
        <Link href="/12" passHref>
          <Item>Macaquinho com code 45</Item>
        </Link>
        <Item>Macaquinho com code 41</Item>
        <Item>Macaquinho com code 42</Item>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
`;
