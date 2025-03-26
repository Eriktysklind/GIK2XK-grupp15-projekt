import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
  export default function Varukorg({ open, onClose, userId }) {
    const [user, setUser] = useState(null);
    const [produkter, setProdukter] = useState([]);
  
    useEffect(() => {
      if (open && userId) {
        // Hämta användarens namn
        axios.get(`http://localhost:3000/users/${userId}`)
          .then(res => {
            setUser(res.data);
          })
          .catch(err => console.error('Kunde inte hämta användare:', err));
  
        // Hämta varukorg
        axios.get(`http://localhost:3000/users/${userId}/getCart`)
          .then(res => {
            if (res.data && res.data.products) {
              setProdukter(res.data.products);
            } else {
              setProdukter([]);
            }
          })
          .catch(err => console.error('Kunde inte hämta varukorg:', err));
      }
    }, [open, userId]);;
  
    return (
      <Dialog
        fullScreen
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={onClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {user ? `Varukorg för ${user.firstName} ${user.lastName}` : 'Varukorg'}
            </Typography>
            <Button autoFocus color="inherit" onClick={onClose}>
              Stäng
            </Button>
          </Toolbar>
        </AppBar>
        <List>
            {produkter.map((produkt) => (
                <Box key={produkt.id}>
                <ListItemButton>
                    <ListItemText
                    primary={produkt.title}
                    secondary={`Pris: ${produkt.price} kr`}
                    />
                </ListItemButton>
                <Divider />
                </Box>
  ))}
        </List>
      </Dialog>
    );
  }