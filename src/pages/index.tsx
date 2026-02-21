import { GetServerSideProps } from "next";
import { Box } from "@mui/system";
import Layout from "@/layout/layout";
import { Content, Hero, Sidebar } from "@/components";
import { BlogsService } from "@/services/blog.service";
import { BlogType } from "@/types/blog";
import { CategoryType } from "@/types/category";
import SEO from "@/layout/seo/seo";

const IndexPage = ({ blogs, latestBlogs, categories }: HomePageProps) => {
  return (
    <SEO>
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
    </SEO>
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
  blogs: BlogType[];
  latestBlogs: BlogType[];
  categories: CategoryType[];
}
