import { Avatar, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { Sidebar } from "src/components";
import { calculateEstimatedTimeToRead } from "src/helpers/time.format";
import { BlogsType } from "src/interfaces/blogs.interface";
import { CategoryType } from "src/interfaces/categories.interface";
import Layout from "src/layout/layout";
import { BlogsService } from "src/services/blog.service";
import { format } from "date-fns";

const DetailedBlogsPage = ({
  blog,
  latestBlogs,
  categories,
}: DetailedBlogsPageProps) => {
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
        <Box width={{ xs: "100%", md: "70%" }}>
          <Box
            sx={{
              background: "rgba(0, 0, 0, .5)",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 8px 16px rgba(255, 255, 255, 0.2)",
              position: "relative",
              width: "100%",
              height: { xs: "30vh", md: "60vh" },
              marginY: "20px",
            }}
          >
            <Image
              src={blog.image.url}
              alt={blog.title}
              fill
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginTop: "20px",
              }}
            >
              <Avatar alt={blog.author.name} src={blog.author.avatar.url} />
              <Box>
                <Typography>{blog.author.name}</Typography>
                <Box color={"gray"}>
                  {format(new Date(blog.createdAt), "dd MMM, yyyy")} •{" "}
                  {calculateEstimatedTimeToRead(blog.description.text)} min read
                </Box>
              </Box>
            </Box>
            <Typography variant="h3">{blog.title}</Typography>
            <Typography color={"gray"}>{blog.excerpt}</Typography>
            <Divider />
            <div
              style={{ opacity: "0.9" }}
              dangerouslySetInnerHTML={{ __html: blog.description.html }}
            />
          </Box>
        </Box>
        <Sidebar latestBlogs={latestBlogs} categories={categories} />
      </Box>
    </Layout>
  );
};

export default DetailedBlogsPage;

export const getServerSideProps: GetServerSideProps<
  DetailedBlogsPageProps
> = async ({ query }) => {
  const blog = await BlogsService.getDetailedBlogs(query.slug as string);
  const latestBlogs = await BlogsService.getLatestBlogs();
  const categories = await BlogsService.getCategories();

  return {
    props: {
      blog,
      latestBlogs,
      categories,
    },
  };
};

interface DetailedBlogsPageProps {
  blog: BlogsType;
  latestBlogs: BlogsType[];
  categories: CategoryType[];
}
