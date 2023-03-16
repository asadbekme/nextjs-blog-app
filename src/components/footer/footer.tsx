import { Box, Typography } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { format } from "date-fns";

const Footer = () => {
  return (
    <Box
      padding={"20px"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "primary.main",
        color: "white",
      }}
    >
      <Typography>
        © {format(new Date(), "yyyy")} Blogs. All rights reserved.
      </Typography>
      <Box sx={{ display: "flex", gap: "20px" }}>
        <TelegramIcon sx={{ cursor: "pointer" }} />
        <YouTubeIcon sx={{ cursor: "pointer" }} />
        <InstagramIcon sx={{ cursor: "pointer" }} />
      </Box>
    </Box>
  );
};

export default Footer;
