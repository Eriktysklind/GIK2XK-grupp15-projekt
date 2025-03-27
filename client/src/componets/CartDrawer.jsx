//Vi använder oss av https://mui.com/material-ui/react-drawer/ drawer komponterna för att bygga varukorgen.
//Med hjälp funktionaliteten som finns där och med datan som vi har vi kunna visuellt visa en användars varukorg. 
//Vi har lagt till denna funktionalitet i ReponsiveAppBar så när man trycker på varukorg kommer varukorgen in från höger. 
//Varukorgen är bara byggt för att visa produkterna som en användare har lagt till och har inte funktionaliteten
//för att ändra, tabort eller uppdatera direkt i varukorgen. 

import {
    Drawer,
    Box,
    Typography,
    IconButton,
    Divider,
    List,
    ListItem,
    ListItemText,
  } from "@mui/material";
  import CloseIcon from "@mui/icons-material/Close";
  
  function CartDrawer({ open, onClose, cartItems }) {
    const safeCartItems = Array.isArray(cartItems) ? cartItems : [];
  
    const totalPrice = safeCartItems.reduce(
      (sum, item) => sum + item.amount * item.price,
      0
    );
  
    return (
      <Drawer anchor="right" open={open} onClose={onClose}>
        <Box sx={{ width: 350, p: 2 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Din varukorg</Typography>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
  
          <Divider sx={{ my: 2 }} />
  

          {cartItems.length === 0 ? (
            <Typography variant="body2">Varukorgen är tom.</Typography>
          ) : (
            <List>
              {safeCartItems.map((item) => (
                <ListItem key={item.productId} disableGutters>
                  <ListItemText
                    primary={item.title}
                    secondary={`Antal: ${item.amount} × ${item.price} kr`}
                  />
                  
                    <Typography variant="body2">
                      {item.amount * item.price} kr
                    </Typography>
                  
                </ListItem>
              ))}
            </List>
          )}
  
          <Divider sx={{ my: 2 }} />
  
          <Box display="flex" justifyContent="space-between" px={1}>
            <Typography variant="subtitle1" fontWeight="bold">Totalt:</Typography>
            <Typography variant="subtitle1" fontWeight="bold">{totalPrice} kr</Typography>
          </Box>
        </Box>
      </Drawer>
    );
  }
  
  export default CartDrawer;
  