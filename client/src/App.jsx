import {  Outlet } from "react-router-dom"
import { Box, Container} from '@mui/material';
import ResponsiveAppBar from "./componets/ReponsiveAppBar";
import Footer from "./componets/Footer";
import Login from "./componets/Login";
import { useEffect, useState } from "react";


function App() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);
  
  const handleLogin = (user) => {
    localStorage.setItem("userId", user.id);
    setUserId(user.id);
  };
  return (
    <>
    {!userId ? (
      <Login open={true} onLogin={handleLogin} />
    ) : (
      <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh", display: 'flex', flexDirection: 'column'}}>
        <ResponsiveAppBar />
        <Container sx={{ mt: 4, flex: 1}} maxWidth="xl" component="main">
          <Outlet />
        </Container>
        <Footer />
      </Box>
    )}
  </>
);
}

export default App
