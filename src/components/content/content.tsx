import Image from "next/image";
import { Box } from "@mui/system";
import { Avatar, Divider, Typography } from "@mui/material";
import { format } from "date-fns";
import { ContentProps } from "./content.props";
import { calculateEstimatedTimeToRead } from "src/helpers/time.format";

const Content = ({ blogs }: ContentProps) => {
  return (
    <Box width={{ xs: "100%", md: "70%" }}>
      {blogs.map((blog) => (
        <Box
          key={blog.id}
          sx={{
            background: "rgba(0, 0, 0, .5)",
            padding: "20px",
            marginTop: "20px",
            borderRadius: "10px",
            boxShadow: "0 8px 16px rgba(255, 255, 255, 0.2)",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: "30vh", md: "60vh" },
            }}
          >
            <Image
              src={blog.image.url}
              alt={blog.title}
              fill
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
          </Box>
          <Typography variant="h4" marginTop={"25px"}>
            {blog.title}
          </Typography>
          <Typography variant="body1" color={"gray"}>
            {blog.excerpt}
          </Typography>
          <Divider sx={{ marginTop: "25px" }} />
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
        </Box>
      ))}
    </Box>
  );
};

export default Content;
