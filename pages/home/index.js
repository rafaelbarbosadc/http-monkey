import { Container, Title, Item } from "./styles";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Title>HTTP Monkey</Title>
      <Container>
        <Link href="/45">
          <Item>Macaquinho com code 45</Item>
        </Link>
        <Link href="/41">
          <Item>Macaquinho com code 41</Item>
        </Link>
        <Link href="/42">
          <Item>Macaquinho com code 42</Item>
        </Link>
      </Container>
    </>
  );
}
