//Vi har byggt en komponent för att kunna visa flera produkter samtigt och har använt oss av Paper och box för att designa den. 
//Den visar den mest relevanta information och har en hover funktion som overlay.
//Vid overlay visar vi en beskrivningen av produkten och betyget på produkten. 
//Vi har använt oss av sx för att placera komponeterna och designa de. 

import { Paper, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import RatingAverage from "./RatingAverage.jsx"

function ProductItemSmall({ product }) {
  return (
    <Paper
      component={Link}
      to={`/products/${product.id}`}
      elevation={5}
      sx={{
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 2,
        textAlign: "center",
        borderRadius: "1rem",
        overflow: "hidden",
        "&:hover .hoverOverlay": {
          opacity: 1,
        },
        bgcolor: "#fafafa"
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={product.imageUrl}
          alt={product.title}
          sx={{
            width: "100%",
            objectFit: "contain",
            borderRadius: "1rem",
          }}
        />
      </Box>

      <Box
        sx={{
          color: "inherit",
          textDecoration: "none",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          mt: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>
          {product.title}
        </Typography>
        <Typography variant="body1" fontWeight="bold">
          {product.price} kr
        </Typography>
      </Box>

      <Box
        className="hoverOverlay"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0, 0, 0, 0.8)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          opacity: 0,
          transition: "opacity 0.3s",
          p: 2,
        }}
      >
        <Typography variant="body2" sx={{pb: 3}}>{product.description}</Typography>
        <RatingAverage productId={product.id} />
      </Box>
    </Paper>
  );
}

export default ProductItemSmall;
