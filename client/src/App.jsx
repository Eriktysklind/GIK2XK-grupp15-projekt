import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom"
import {Box, Container, AppBar, Toolbar, Typography, Stack, Button} from '@mui/material';
import Footer from "./components/Footer";
import Varukorg from "./components/Varukorg";

function App() {

  const [visaVarukorg, setVisaVarukorg] = useState(false);

  return (
    <>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/">Webbshop</Link>
          </Typography>
          <Button color="inheritage" onClick={() => setVisaVarukorg(true)}>Varukorg</Button>

      {/* Visa komponenter */}
      {visaVarukorg && (
  <Varukorg open={visaVarukorg} onClose={() => setVisaVarukorg(false)} />
)}
        </Toolbar>
      </AppBar>
    </Box>
      <Outlet/>
      <Footer />
    </>
  )
}

export default App
