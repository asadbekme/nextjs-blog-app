import { GetServerSideProps } from "next";
import { Box } from "@mui/system";
import { BlogsType } from "src/interfaces/blogs.interface";
import { CategoryType } from "src/interfaces/categories.interface";
import Layout from "src/layout/layout";
import { BlogsService } from "src/services/blog.service";
import { Content, Sidebar } from "src/components";

const CategoryDetailedPage = ({ blogs, latestBlogs, categories }: DetailedCategoryBlogsPageProps) => {
  return (
    <Layout>
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

export default CategoryDetailedPage;

export const getServerSideProps: GetServerSideProps<DetailedCategoryBlogsPageProps> = async ({ query }) => {
  const blogs = await BlogsService.getDetailedCategoryBlogs(query.slug as string);
  const latestBlogs = await BlogsService.getLatestBlogs();
  const categories = await BlogsService.getCategories();

  return {
    props: {
      blogs,
      latestBlogs,
      categories,
    },
  };
};

interface DetailedCategoryBlogsPageProps {
  blogs: BlogsType[];
  latestBlogs: BlogsType[];
  categories: CategoryType[];
}
