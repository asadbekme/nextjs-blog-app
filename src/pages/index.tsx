import { GetServerSideProps } from "next";
import { Box } from "@mui/system";
import Layout from "src/layout/layout";
import { Content, Hero, Sidebar } from "src/components";
import { BlogsService } from "src/services/blog.service";
import { BlogsType } from "src/interfaces/blogs.interface";
import { CategoryType } from "src/interfaces/categories.interface";

const IndexPage = ({ blogs, latestBlogs, categories }: HomePageProps) => {
  return (
    <Layout>
      <Hero blogs={blogs.slice(0, 3)} />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "20px",
          padding: "20px",
        }}
      >
        <Sidebar latestBlogs={latestBlogs} categories={categories} />
        <Content blogs={blogs} />
      </Box>
    </Layout>
  );
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps<
  HomePageProps
> = async () => {
  const blogs = await BlogsService.getAllBlogs();
  const latestBlogs = await BlogsService.getLatestBlogs();
  const categories = await BlogsService.getCategories();

  return {
    props: {
      blogs: blogs,
      latestBlogs,
      categories,
    },
  };
};

interface HomePageProps {
  blogs: BlogsType[];
  latestBlogs: BlogsType[];
  categories: CategoryType[];
}
