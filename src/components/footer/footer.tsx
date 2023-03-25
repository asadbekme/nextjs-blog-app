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
        background: "#141414",
        color: "white",
        borderTop: "1px solid rgba(255, 255, 255, 0.43)",
      }}
    >
      <Typography>
        © {format(new Date(), "yyyy")} Blogs. All rights reserved.
      </Typography>
      <Box sx={{ display: "flex", gap: "20px" }}>
        <TelegramIcon
          sx={{ cursor: "pointer", "&:hover": { color: "#F57D00" } }}
        />
        <YouTubeIcon
          sx={{ cursor: "pointer", "&:hover": { color: "#F57D00" } }}
        />
        <InstagramIcon
          sx={{ cursor: "pointer", "&:hover": { color: "#F57D00" } }}
        />
      </Box>
    </Box>
  );
};

export default Footer;
