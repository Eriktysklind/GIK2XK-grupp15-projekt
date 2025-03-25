import { Paper, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function ProductItemSmall({product}) {
    return ( 
        <>
    <Paper
      elevation={5}
      sx={{
        height: '100%', // 🟢 så det fyller Grid item korrekt
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 2,
        textAlign: 'center',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: 8,
        },
      }}
    >
      <Box component={Link} to={`/products/${product.id}`} sx={{ textDecoration: 'none', color: 'inherit' }}>
        <Typography variant="h6" gutterBottom>
          {product.title}
        </Typography>
        <Box
          component="img"
          src={product.imageUrl}
          alt={product.title}
          sx={{
            width: '100%',
            maxHeight: '150px',
            objectFit: 'contain',
            mb: 1,
          }}
        />
        <Typography variant="body1" fontWeight="bold">
          {product.price} kr
        </Typography>
      </Box>
    </Paper>
        </>
     );
}

export default ProductItemSmall;