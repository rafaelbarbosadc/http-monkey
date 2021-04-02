import React from "react";
import { Container } from "./styles";
const Item = React.forwardRef(({ onClick, href, children }, ref) => {
  return (
    <Container href={href} onClick={onClick} ref={ref}>
      {children}
    </Container>
  );
});
export default Item;
