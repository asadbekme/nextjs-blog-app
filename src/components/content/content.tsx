import Image from "next/image";
import { Box } from "@mui/system";
import { Avatar, Divider, Typography } from "@mui/material";
import { format } from "date-fns";
import { data } from "src/config/constants";

const Content = () => {
  return (
    <Box width={{ xs: "100%", md: "70%" }}>
      {data.map((item) => (
        <Box
          key={item.image}
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
              src={item.image}
              alt={item.title}
              fill
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
          </Box>
          <Typography variant="h4" marginTop={"25px"}>
            {item.title}
          </Typography>
          <Typography variant="body1" color={"gray"}>
            {item.exerpt}
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
            <Avatar alt={item.author.name} src={item.author.image} />
            <Box>
              <Typography>{item.author.name}</Typography>
              <Box color={"gray"}>
                {format(new Date(), "dd MMM, yyyy")} • 10min read
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Content;
