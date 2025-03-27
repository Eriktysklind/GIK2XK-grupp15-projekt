//Vi har använt oss av https://mui.com/material-ui/react-app-bar/#app-bar-with-responsive-menu för att bygga upp vår navbar för hemsidan
//Den tillhandahåller länkar för alla olika views som är relevanta och finns på alla views.
//Den är tillagda i App.jsx så att det finns på alla sidor. 

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import loggotyp from "../assets/loggotyp.png";
import { Link } from "react-router-dom";
import Cart from "./CartDrawer";
import { getOne } from "../services/UserService";

const pages = ["Produkter", "Lägg till produkter", "Varukorg"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const navigate = useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOpenCart = async () => {
    const userId = localStorage.getItem("userId");
    const cartData = await getOne(userId);
  
    if (!cartData || !Array.isArray(cartData.products)) {
      setCartItems([]);
      return;
    }
  
    const items = cartData.products.map((product) => ({
      productId: product.id,
      title: product.title,
      price: product.price,
      amount: product.cartRow.amount,
    }));
  
    setCartItems(items);
    setCartOpen(true);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#e3f2fd" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component={Link}
            to="/"
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              textDecoration: "none",
              mr: 2,
            }}
          >
            <Box
              component="img"
              src={loggotyp}
              alt="Logotyp för hemsidan som symbolysera en fiskebåt"
              sx={{ display: { xs: "none", md: "flex" }, mr: 1, height: 40 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#424242",
                textDecoration: "none",
              }}
            >
              FISKEBÅTAR
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#424242"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => {
                    handleCloseNavMenu();
                    if (page === "Produkter") navigate("/products/all");
                    if (page === "Lägg till produkter")
                      navigate("/products/edit");
                    if (page === "Varukorg") handleOpenCart();
                  }}
                >
                  <Typography sx={{ color: "#424242", textAlign: "center" }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            component={Link}
            to="/"
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <Box
              component="img"
              src={loggotyp}
              alt="Logotyp för hemsidan som symbolysera en fiskebåt"
              sx={{ display: { xs: "flex", md: "none" }, mr: 1, height: 40 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#424242",
                textDecoration: "none",
              }}
            >
              FISKEBÅTAR
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  handleCloseNavMenu();
                  if (page === "Produkter") navigate("/products/all");
                  if (page === "Lägg till produkter")
                    navigate("/products/edit");
                  if (page === "Varukorg") handleOpenCart();
                }}
                sx={{ my: 2, color: "#424242", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            ></Menu>
          </Box>
        </Toolbar>
      </Container>
      <Cart
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
      />
    </AppBar>
  );
}
export default ResponsiveAppBar;
