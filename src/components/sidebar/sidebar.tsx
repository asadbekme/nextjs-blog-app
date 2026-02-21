import { Typography, Button, Divider, Avatar } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { Fragment } from "react";
import { format } from "date-fns";
import { SidebarProps } from "./sidebar.props";
import { useRouter } from "next/router";
// import { data, navItems } from "@/config/constants";

const Sidebar = ({ latestBlogs, categories }: SidebarProps) => {
  const router = useRouter();

  return (
    <Box width={{ xs: "100%", md: "30%" }}>
      <Box
        sx={{ position: "sticky", top: "100px", transition: "all .3s ease" }}
      >
        <Box
          sx={{
            padding: "20px",
            border: "1px solid gray",
            borderRadius: "8px",
          }}
        >
          <Typography variant="h5">Latest blog</Typography>
          <Box
            sx={{ display: "flex", flexDirection: "column", marginTop: "20px" }}
          >
            {latestBlogs.map((item) => (
              <Box
                key={item.id}
                sx={{ marginTop: "10px", cursor: "pointer" }}
                onClick={() => router.push(`/blog/${item.slug}`)}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={item.image.url}
                    alt={item.title}
                    width={100}
                    height={100}
                    style={{ objectFit: "cover", borderRadius: "7px" }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <Typography variant="body1">{item.title}</Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <Avatar
                        alt={item.author.name}
                        src={item.author.avatar.url}
                      />
                      <Box>
                        <Typography variant="subtitle2">
                          {item.author.name}
                        </Typography>
                        <Typography variant="body1" sx={{ opacity: "0.6" }}>
                          {format(new Date(item.createdAt), "dd MMM, yyyy")}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Divider sx={{ marginTop: "10px" }} />
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            padding: "20px",
            border: "1px solid gray",
            borderRadius: "8px",
            marginTop: "20px",
          }}
        >
          <Typography variant="h5">Category</Typography>
          <Box
            sx={{ display: "flex", flexDirection: "column", marginTop: "20px" }}
          >
            {categories.map((category) => (
              <Fragment key={category.slug}>
                <Button
                  onClick={() => router.push(`/category/${category.slug}`)}
                  sx={{ justifyContent: "flex-start", height: "50px" }}
                >
                  {category.label}
                </Button>
                <Divider />
              </Fragment>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
