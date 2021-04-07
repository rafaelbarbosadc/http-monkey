import React from 'react';
import { Container, Code, Description } from './styles';
const Item = React.forwardRef(({ onClick, href, code, description }, ref) => {
  return (
    <Container href={href} onClick={onClick} ref={ref} t>
      <Code>{code}</Code>
      <Description> {description}</Description>
    </Container>
  );
});

export default Item;
