import { Typography, Button, Divider, Avatar } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { Fragment } from "react";
import { data, navItems } from "src/config/constants";
import { format } from "date-fns";

const Sidebar = () => {
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
            {data.map((item) => (
              <Box key={item.title} sx={{ marginTop: "10px" }}>
                <Box
                  sx={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={item.image}
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
                      <Avatar alt={item.author.name} src={item.author.image} />
                      <Box>
                        <Typography variant="subtitle2">
                          {item.author.name}
                        </Typography>
                        <Typography variant="body1" sx={{ opacity: "0.6" }}>
                          {format(new Date(), "dd MMM, yyyy")}
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
            {navItems.map((item) => (
              <Fragment key={item.route}>
                <Button sx={{ justifyContent: "flex-start", height: "50px" }}>
                  {item.label}
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
