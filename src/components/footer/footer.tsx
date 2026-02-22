import { Box, Typography } from "@mui/material";
import { format } from "date-fns";
import Link from "next/link";
import { GitHub, LinkedIn, Telegram } from "@mui/icons-material";

const Footer = () => {
  const socialMediaLinks = [
    {
      name: "LinkedIn",
      icon: <LinkedIn />,
      url: "https://www.linkedin.com/in/asadbek-rakhimov",
      color: "#0077B5",
    },
    {
      name: "Github",
      icon: <GitHub />,
      url: "https://github.com/asadbekme",
      color: "#ffffff",
    },
    {
      name: "Telegram",
      icon: <Telegram />,
      url: "https://t.me/asadbekodev",
      color: "#0088cc",
    },
  ];

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
        {socialMediaLinks.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: link.color, fontSize: "24px" }}
          >
            {link.icon}
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default Footer;
