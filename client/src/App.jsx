import { Link, Outlet } from "react-router-dom"
import {Box, AppBar, Toolbar, Typography, Button, Container} from '@mui/material';
import ResponsiveAppBar from "./componets/ReponsiveAppBar";

function App() {

  return (
    <>
    <ResponsiveAppBar />
    <Container sx={{mt: 4}} maxWidth="xl" component="main">
      <Outlet/>
      </Container>
    </>
  )
}

export default App
