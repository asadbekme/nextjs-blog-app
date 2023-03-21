import { GetServerSideProps } from "next";
import { Box } from "@mui/system";
import Layout from "src/layout/layout";
import { Content, Hero, Sidebar } from "src/components";
import { BlogsService } from "src/services/blog.service";
import { BlogsType } from "src/interfaces/blogs.interface";

const IndexPage = ({ blogs }: HomePageProps) => {
  console.log(blogs);

  return (
    <Layout>
      <Hero />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "20px",
          padding: "20px",
        }}
      >
        <Sidebar />
        <Content />
      </Box>
    </Layout>
  );
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  const blogs = await BlogsService.getAllBlogs();

  return {
    props: {
      blogs: blogs,
      message: "Message from SSR",
    },
  };
};

interface HomePageProps {
  blogs: BlogsType[];
  message: string;
}
