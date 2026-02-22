import { GetStaticPaths, GetStaticProps } from "next";
import { Box } from "@mui/system";
import { BlogType } from "@/types/blog";
import { CategoryType } from "@/types/category";
import Layout from "@/layout/layout";
import { BlogsService } from "@/services/blog.service";
import { Content, Sidebar } from "@/components";
import SEO from "@/layout/seo/seo";

const CategoryDetailedPage = ({
  blogs,
  latestBlogs,
  categories,
  slug,
}: DetailedCategoryBlogsPageProps) => {
  return (
    <SEO metaTitle={`${slug} category`}>
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

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await BlogsService.getCategories();

  return {
    paths: categories.map((category) => ({
      params: { slug: category.slug },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<
  DetailedCategoryBlogsPageProps
> = async ({ params }) => {
  const [blogs, latestBlogs, categories] = await Promise.all([
    BlogsService.getDetailedCategoryBlogs(params?.slug as string),
    BlogsService.getLatestBlogs(),
    BlogsService.getCategories(),
  ]);

  return {
    props: { blogs, latestBlogs, categories, slug: params?.slug as string },
    revalidate: 60,
  };
};

interface DetailedCategoryBlogsPageProps {
  blogs: BlogType[];
  latestBlogs: BlogType[];
  categories: CategoryType[];
  slug: string;
}
