import {
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
    Button,
    Typography,
  } from "@mui/material";
  import { useState } from "react";
  import { login } from "../services/UserService"; 
  
  function Login({ open, onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const handleSubmit = async () => {
      const user = await login(email, password);
      if (user) {
        localStorage.setItem("userId", user.id);
        onLogin(user);
      } else {
        setError("Fel e-post eller lösenord.");
      }
    };
  
    return (
      <Dialog open={open}>
        <DialogTitle>Logga in</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="E-post"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Lösenord"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <Typography color="error">{error}</Typography>}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} variant="contained">Logga in</Button>
        </DialogActions>
      </Dialog>
    );
  }
  
  export default Login;
  