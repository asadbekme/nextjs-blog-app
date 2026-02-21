import { Box } from "@mui/system";
import { Navbar, Footer } from "@/components";
import { LayoutProps } from "./layout.props";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Navbar />
      <Box minHeight={"90vh"}>{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
