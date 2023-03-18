import Head from "next/head";
import { Box } from "@mui/system";
import Layout from "src/layout/layout";
import { Content, Hero, Sidebar } from "src/components";

const IndexPage = () => {
  return (
    <Layout>
      <Head>
        <title>Index Page</title>
      </Head>
      <Hero />
      <Box sx={{ display: "flex", gap: "20px", padding: "20px" }}>
        <Sidebar />
        <Content />
      </Box>
    </Layout>
  );
};

export default IndexPage;
