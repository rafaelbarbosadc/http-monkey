import Link from 'next/link';
import styled from 'styled-components';

import Item from '../../components/Item';
import { Title } from '../../components/Title/styles';

export default function Home({ database }) {
  return (
    <>
      <Title>HTTP Monkey</Title>
      <Container>
        {database.map((httpCode, index) => (
          <Link href={`/${httpCode['code']}`} passHref>
            <Item
              key={index}
              code={httpCode['code']}
              description={httpCode['label']}
            />
          </Link>
        ))}
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
