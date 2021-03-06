import styled from 'styled-components';
import { Row, Col } from 'antd';

import { Title } from '../../components/Title/styles';
import StatusCard from '../../components/StatusCard';

export default function Home({ database }) {
  return (
    <>
      <Title>HTTP Monkey</Title>
      <Container>
        <HomeRow gutter={[16, 16]}>
          {database.map(({ code, label, gif }) => (
            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
              <StatusCard key={code} code={code} label={label} gif={gif} />
            </Col>
          ))}
        </HomeRow>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const HomeRow = styled(Row)`
  width: 70%;
`;
