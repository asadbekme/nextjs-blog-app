import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Avatar, Box, Typography } from "@mui/material";
import { data } from "src/config/constants";
import Image from "next/image";
import { format } from "date-fns";

const Hero = () => {
  const responsive = {
    gadget: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };

  return (
    <Box width={"100%"} height={"90vh"} sx={{ backgroundColor: "red" }}>
      <Carousel responsive={responsive}>
        {data.map((item, idx) => (
          <Box key={idx}>
            <Box sx={{ position: "relative", width: "100%", height: "90vh" }}>
              <Image
                src={item.image}
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
                  width: { xs: "100%", sm: "70%" },
                  position: "relative",
                  color: "white",
                  zIndex: 99,
                  top: "50%",
                  transform: "translateY(-50%)",
                  paddingLeft: { xs: "10px", sm: "40px" },
                }}
              >
                <Typography variant="h3">{item.title}</Typography>
                <Typography variant="h5">{item.exerpt}</Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginTop: "20px",
                  }}
                >
                  <Avatar alt={item.author.name} src={item.author.image} />
                  <Box>
                    <Typography>{item.author.name}</Typography>
                    <Box>{format(new Date(), "dd MMM, yyyy")} • 10min read</Box>
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
