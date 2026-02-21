import { GetServerSideProps } from "next";
import { BlogType } from "@/types/blog";
import Layout from "@/layout/layout";
import { BlogsService } from "@/services/blog.service";
import { Box } from "@mui/system";
import { Content } from "@/components";
import SEO from "@/layout/seo/seo";

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
  blogs: BlogType[];
}
