import { GetServerSideProps } from "next";
import { CategoryType } from "@/types/category";
import Layout from "@/layout/layout";
import { BlogsService } from "@/services/blog.service";
import { Box } from "@mui/system";
import { Typography, ButtonGroup, Button } from "@mui/material";
import { useRouter } from "next/router";
import SEO from "@/layout/seo/seo";

const CategoryPage = ({ categories }: CategoryPageProps) => {
  const router = useRouter();

  return (
    <SEO metaTitle="All Categories">
      <Layout>
        <Box
          height={{ xs: "60vh", md: "70vh" }}
          width={{ xs: "96%", md: "80%" }}
          marginX={"auto"}
          marginTop={"10vh"}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            rowGap: "12px",
            background: "black",
            borderRadius: "8px",
          }}
        >
          <Typography variant="h3" fontFamily={"cursive"}>
            All Categories
          </Typography>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "initial" },
            }}
          >
            {categories.map((category) => (
              <Button
                key={category.slug}
                sx={{ fontWeight: "bolder" }}
                onClick={() => router.push(`/category/${category.slug}`)}
              >
                # {category.label}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
      </Layout>
    </SEO>
  );
};

export default CategoryPage;

export const getServerSideProps: GetServerSideProps<
  CategoryPageProps
> = async () => {
  const categories = await BlogsService.getCategories();

  return {
    props: {
      categories,
    },
  };
};

interface CategoryPageProps {
  categories: CategoryType[];
}
