import { GetServerSideProps } from "next";
import { BlogsType } from "src/interfaces/blogs.interface";
import Layout from "src/layout/layout";
import { BlogsService } from "src/services/blog.service";
import { Box } from "@mui/system";
import { Content } from "src/components";
import SEO from "src/layout/seo/seo";

const BlogPage = ({ blogs }: BlogPageProps) => {
  return (
    <SEO metaTitle="All Blogs">
      <Layout>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: "20px",
            padding: "20px",
            justifyContent: "center",
          }}
        >
          <Content blogs={blogs} />
        </Box>
      </Layout>
    </SEO>
  );
};

export default BlogPage;

export const getServerSideProps: GetServerSideProps<
  BlogPageProps
> = async () => {
  const blogs = await BlogsService.getAllBlogs();

  return {
    props: {
      blogs,
    },
  };
};

interface BlogPageProps {
  blogs: BlogsType[];
}
