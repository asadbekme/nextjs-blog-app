import { GetServerSideProps } from "next";
import { CategoryType } from "src/interfaces/categories.interface";
import Layout from "src/layout/layout";
import { BlogsService } from "src/services/blog.service";
import { Box } from "@mui/system";
import { Typography, ButtonGroup, Button } from "@mui/material";
import { useRouter } from "next/router";

const CategoryPage = ({ categories }: CategoryPageProps) => {
  const router = useRouter();

  return (
    <Layout>
      <Box
        height={{ xs: "30vh", md: "50vh" }}
        width={{ xs: "100%", md: "80%" }}
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
        >
          {categories.map((category) => (
            <Button
              key={category.slug}
              sx={{ fontWeight: "bold" }}
              onClick={() => router.push(`/category/${category.slug}`)}
            >
              # {category.label}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
    </Layout>
  );
};

export default CategoryPage;

export const getServerSideProps: GetServerSideProps<CategoryPageProps> = async () => {
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
