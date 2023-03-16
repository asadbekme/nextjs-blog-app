import { Button } from "@mui/material";
import Head from "next/head";
import Layout from "src/layout/layout";

const IndexPage = () => {
  return (
    <Layout>
      <Head>
        <title>Index Page</title>
      </Head>
      <div>
        <Button>Click me!</Button>
      </div>
    </Layout>
  );
};

export default IndexPage;
