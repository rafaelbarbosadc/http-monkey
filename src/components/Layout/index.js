import Footer from './Footer';
import Header from './Header';
import { Body, Content } from './style';

const Layout = ({ children, title }) => {
  return (
    <Body>
      <Header title={title} />
      <Content>{children}</Content>
      {/* <Footer /> */}
    </Body>
  );
};

export default Layout;
