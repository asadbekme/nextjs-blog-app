import { Button } from "@mui/material";
import Head from "next/head";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <div>
        <h4>IndexPage</h4>
        <Button>Click me!</Button>
      </div>
    </>
  );
};

export default IndexPage;
