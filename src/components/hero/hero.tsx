import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Avatar, Box, Typography } from "@mui/material";
import Image from "next/image";
import { format } from "date-fns";
import { HeroProps } from "./hero.props";

const Hero = ({ blogs }: HeroProps) => {
  const responsive = {
    gadget: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };

  return (
    <Box
      width={"100%"}
      sx={{ backgroundColor: "black", height: { xs: "70vh", md: "90vh" } }}
    >
      <Carousel responsive={responsive}>
        {blogs.map((item, idx) => (
          <Box key={item.id}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: "70vh", md: "90vh" },
              }}
            >
              <Image
                src={item.image.url}
                alt={item.title}
                fill
                style={{ objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  left: 0,
                  bottom: 0,
                  width: "100%",
                  height: "100%",
                  background: "rgba(0, 0, 0, 0.54)",
                }}
              />
              <Box
                sx={{
                  width: { xs: "100%", md: "70%" },
                  position: "relative",
                  color: "white",
                  zIndex: 99,
                  top: "50%",
                  transform: "translateY(-50%)",
                  paddingLeft: { xs: "20px", md: "50px" },
                }}
              >
                <Typography sx={{ fontSize: { xs: "30px", md: "50px" } }}>
                  {item.title}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "20px", md: "25px" }, color: "gray" }}
                >
                  {item.excerpt}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginTop: "20px",
                  }}
                >
                  <Avatar alt={item.author.name} src={item.author.avatar.url} />
                  <Box>
                    <Typography>{item.author.name}</Typography>
                    <Box>
                      {format(new Date(item.createdAt), "dd MMM, yyyy")} • 10min
                      read
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Hero;
