import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { navItems } from "@/config/constants";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";

interface Props {
  window?: () => Window;
}

const Navbar = ({ window }: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "7px",
            my: 2,
          }}
        >
          <Image src={"/favicon.svg"} alt="logo" width={50} height={42} />
          <Typography variant="h5">Blogs</Typography>
        </Box>
        <CloseIcon sx={{ cursor: "pointer" }} onClick={handleDrawerToggle} />
      </Box>
      <Divider />
      <Box component={"nav"}>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.route} disablePadding>
              <ListItemButton
                onClick={() => router.push(`/${item.route}`)}
                sx={{ textAlign: "center" }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box height={"8vh"} sx={{ display: "flex" }}>
      <AppBar
        sx={{ height: "8vh", background: "#141414" }}
        component={"header"}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
            }}
            onClick={() => router.push("/")}
          >
            <Image src={"/favicon.svg"} alt="logo" width={50} height={42} />
            <Typography variant="h5">Blogs</Typography>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }} component={"nav"}>
            {navItems.map((item) => (
              <Button
                onClick={() => router.push(`/${item.route}`)}
                key={item.route}
                sx={{
                  color: "#fff",
                  margin: "8px",
                  fontSize: "14px",
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
