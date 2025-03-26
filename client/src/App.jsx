import {  Outlet } from "react-router-dom"
import { Box, Container} from '@mui/material';
import ResponsiveAppBar from "./componets/ReponsiveAppBar";
import Footer from "./componets/Footer";


function App() {

  return (
    <>
    <Box sx={{
      bgcolor: "#f5f5f5",
      minHeight: "100vh",
    }}>
    <ResponsiveAppBar />
    <Container sx={{mt: 4}} maxWidth="xl" component="main">
      <Outlet/>
      </Container>
      <Footer/>
      </Box>
      
    </>
  )
}

export default App
