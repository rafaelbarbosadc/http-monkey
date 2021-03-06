import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Home from '../src/pages/home';
import Layout from '../src/components/Layout';

export async function getServerSideProps(context) {
  const { req, query, res, asPath, pathname } = context;
  let host = req.headers.host;
  let protocol = host.includes('localhost') ? 'http://' : 'https://';
  let url = `${protocol}${host}/api/db`;
  console.log('URL', url, req.headers);
  const database = await fetch(url).then((res) => res.json());

  return {
    props: { database },
  };
}

export default function Index({ database }) {
  return (
    <Layout title="HTTP Monkey">
      <Home database={database} />
    </Layout>
  );
}
