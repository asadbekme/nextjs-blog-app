import { Avatar, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { Sidebar } from "@/components";
import { calculateEstimatedTimeToRead } from "@/helpers/time.format";
import { BlogType } from "@/types/blog";
import { CategoryType } from "@/types/category";
import Layout from "@/layout/layout";
import { BlogsService } from "@/services/blog.service";
import { format } from "date-fns";
import SEO from "@/layout/seo/seo";
import { formatMetaDescription } from "@/helpers/text.format";

const DetailedBlogPage = ({
  blog,
  latestBlogs,
  categories,
}: DetailedBlogPageProps) => {
  return (
    <SEO
      metaTitle={blog.title}
      metaDescription={formatMetaDescription(blog.description.text)}
      opengraphImage={blog.image.url}
      opengraphUrl={`https://blog-app.asadbekjs.uz/blog/${blog.slug}`}
      type="article"
    >
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
                    {calculateEstimatedTimeToRead(blog.description.text)} min
                    read
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
    </SEO>
  );
};

export default DetailedBlogPage;

export const getServerSideProps: GetServerSideProps<
  DetailedBlogPageProps
> = async ({ query }) => {
  const [blog, latestBlogs, categories] = await Promise.all([
    BlogsService.getDetailedBlog(query.slug as string),
    BlogsService.getLatestBlogs(),
    BlogsService.getCategories(),
  ]);

  return {
    props: {
      blog,
      latestBlogs,
      categories,
    },
  };
};

interface DetailedBlogPageProps {
  blog: BlogType;
  latestBlogs: BlogType[];
  categories: CategoryType[];
}
