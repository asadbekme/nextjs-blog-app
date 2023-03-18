import Head from "next/head";
import { Hero } from "src/components";
import Layout from "src/layout/layout";

const IndexPage = () => {
  return (
    <Layout>
      <Head>
        <title>Index Page</title>
      </Head>
      <Hero />
    </Layout>
  );
};

export default IndexPage;
