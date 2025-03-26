import { Link, Outlet } from "react-router-dom"
import {Box, Container, AppBar, Toolbar, Typography, Stack, Button} from '@mui/material';
import Footer from "./components/Footer";

function App() {

  return (
    <>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/">Webbshop</Link>
          </Typography>
          <Button color="inherit">
          <Link to="/products/all">Se alla produkter</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
      <Outlet/>
      <Footer />
    </>
  )
}

export default App
