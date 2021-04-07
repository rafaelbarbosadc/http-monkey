import Home from '../src/pages/home';

export async function getServerSideProps(context) {
  const { req, query, res, asPath, pathname } = context;
  let host = req.headers.referer;
  let url = `${host}api/db`;

  const database = await fetch(url).then((res) => res.json());

  return {
    props: { database },
  };
}

export default function Index({ database }) {
  return <Home database={database} />;
}
