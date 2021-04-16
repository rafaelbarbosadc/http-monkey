import Head from 'next/head';
import RandomMonkey from '../../../utils';
import { PageTitle } from './style';

const Header = ({ title }) => {
  return (
    <>
      <Head>
        <title>{`${title} ${RandomMonkey()}`}</title>
        <link rel="shortcut icon" href="favicon.ico" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Hypertext Transfer Protocol Response status codes and monkeys."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="HTTP Monkey 🐒" key="title" />
        <meta
          property="og:description"
          content="Hypertext Transfer Protocol Response status codes and monkeys."
          key="ogdesc"
        />
        <meta
          property="og:image"
          content="https://api.time.com/wp-content/uploads/2014/09/macaca_nigra_self-portrait_rotated_and_cropped.jpg
        "
          key="ogimage"
        />
        <meta
          property="og:url"
          content="https://http-monkey-rafaelbarbosadc.vercel.app"
          key="ogurl"
        />
      </Head>
    </>
  );
};

export default Header;
