import { GetServerSideProps } from "next";
import { Box } from "@mui/system";
import { BlogType } from "@/types/blog";
import { CategoryType } from "@/types/category";
import Layout from "@/layout/layout";
import { BlogsService } from "@/services/blog.service";
import { Content, Sidebar } from "@/components";
import { useRouter } from "next/router";
import SEO from "@/layout/seo/seo";

const CategoryDetailedPage = ({
  blogs,
  latestBlogs,
  categories,
}: DetailedCategoryBlogsPageProps) => {
  const router = useRouter();

  return (
    <SEO metaTitle={`${router.query.slug}-category`}>
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
    </SEO>
  );
};

export default CategoryDetailedPage;

export const getServerSideProps: GetServerSideProps<
  DetailedCategoryBlogsPageProps
> = async ({ query }) => {
  const blogs = await BlogsService.getDetailedCategoryBlogs(
    query.slug as string,
  );
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
  blogs: BlogType[];
  latestBlogs: BlogType[];
  categories: CategoryType[];
}
