import {
    Box,
    Typography,
    Button,
    Tabs,
    Tab,
    Divider,
    Paper,
    TextField,
    Container,
  } from "@mui/material";
  import { useState } from "react";
  import RatingForm from "./RatingForm";
  import specsData from "../data/specs";
  import RatingAverage from "./RatingAverage.jsx";
  import { addToCart } from "../services/ProductService";
  
  function ProductItemLarge({ product }) {
    const [tab, setTab] = useState(0);
    const [amount, setAmount] = useState(1);
    const productSpecs = specsData[product.id];
  
    const handleTabChange = (event, newValue) => {
      setTab(newValue);
    };
  
    const handleAddToCart = async () => {
      const userId = 1;
      await addToCart(product.id, userId, amount)
      console.log(`Lagt till ${amount} x ${product.title} i varukorgen`);
    };
  
    return (
      <Paper elevation={0}>
        <Box
          sx={{
            backgroundImage: `url(${product.imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: { xs: "20rem", md: "30rem", lg: "40rem" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
          }}
        >
          <Typography variant="h3" fontWeight="bold" sx={{}}>
            {product.title}
          </Typography>
        </Box>
  
        <Container sx={{ mt: 1 }}>
          <Tabs
            value={tab}
            onChange={handleTabChange}
            sx={{
              "& .MuiTab-root": {
                minWidth: "auto",
                flex: "1 1 auto",
              },
            }}
          >
            <Tab label="BESKRIVNING" />
            <Tab label="SPECS" />
            <Tab label="FÄRGER" />
            <Tab label="MOTORER" />
          </Tabs>
          <Divider sx={{ my: 1 }} />
  
          <Box sx={{ px: 3, py: 4 }}>
            {tab === 0 && (
              <>
                <Typography variant="h5" gutterBottom>
                  {product.title}
                </Typography>
                <Typography variant="body1" sx={{ pb: 2 }}>
                  {product.description}
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  Pris: {product.price} kr
                </Typography>
              </>
            )}
          </Box>
          <Box sx={{ px: 3 }}>
            {tab === 1 && (
              <>
                <Typography variant="h5" gutterBottom>
                  {product.title}
                </Typography>
                <Typography variant="body1" sx={{ pb: 2 }}>
                  <ul>
                    <li>Längd: {productSpecs.längd}</li>
                    <li>Bredd: {productSpecs.bredd}</li>
                    <li>Vikt: {productSpecs.vikt}</li>
                    <li>Max rekommenderad motor: {productSpecs.motor}</li>
                  </ul>
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  Pris: {product.price} kr
                </Typography>
              </>
            )}
          </Box>
          <Box sx={{ px: 3 }}>
            {tab === 2 && (
              <>
                <Typography variant="h5" gutterBottom>
                  {product.title}
                </Typography>
                <Typography variant="body1" sx={{ pb: 2 }}>
                  <ul>
                    <li>
                    {productSpecs.color1}
                    </li>
                    <li>
                    {productSpecs.color2}
                    </li>
                    <li>
                    {productSpecs.color3}
                    </li>
                  </ul>
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  Pris: {product.price} kr
                </Typography>
              </>
            )}
          </Box>
          <Box sx={{ px: 3 }}>
            {tab === 3 && (
              <>
                <Typography variant="h5" gutterBottom>
                  {product.title}
                </Typography>
                <Typography variant="body1" sx={{ pb: 2 }}>
                  <ul>
                    <li>Mercury 100 hk FourStroke</li>
                    <li>Mercury 115 hk FourStroke</li>
                    <li>Mercury 225 PRO XS V8</li>
                  </ul>
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  Pris: {product.price} kr
                </Typography>
              </>
            )}
          </Box>
  
          <Box
            sx={{
              px: 3,
              pb: 4,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Box sx={{pr: 5}}>
              <Typography variant="subtitle1">{product.title}</Typography>
              <RatingAverage productId={product.id} />
              </Box>
              <Box>
              <Typography variant="subtitle1">Lämna ett betyg:</Typography>
              <RatingForm productId={product.id} />
              </Box>
            </Box>
  
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <TextField
                label="Antal"
                type="number"
                size="small"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                sx={{ width: "100px" }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddToCart}
              >
                Lägg till i varukorg
              </Button>
            </Box>
          </Box>
        </Container>
      </Paper>
    );
  }
  
  export default ProductItemLarge;