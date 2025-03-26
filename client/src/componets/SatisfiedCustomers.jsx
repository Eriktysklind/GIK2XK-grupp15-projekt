import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  Rating,
  Grid2,
  Box,
  Paper,
} from "@mui/material";

import fiskImg from "../assets/NöjdFiskare.png";

function SatisfiedCustomers() {
  const customers = [
    {
      id: 1,
      name: "Patrik Peterson",
      memberSince: "2024-11-22",
      avatarUrl: fiskImg,
      rating: 5,
      comment:
        "Snabb leverans och toppenservice! Nitro ZV21 är den absolut bästa båten jag haft och 10 minuter in i första fisketuren fick jag en 10 kg gädda.",
    },
    {
      id: 2,
      name: "Zacharias Andersson",
      memberSince: "2025-03-22",
      avatarUrl: fiskImg,
      rating: 4.5,
      comment: "Bra priser och tydlig hemsida. Rekommenderas varmt.",
    },
    {
      id: 3,
      name: "Matteus Hjärtström",
      memberSince: "2010-01-05",
      avatarUrl: fiskImg,
      rating: 5,
      comment:
        "Fantastisk kundtjänst! Fick hjälp direkt och produkten var perfekt.",
    },
  ];

  return (
    <Box sx={{ mb: 5, mt: 5}}>
      <Paper
        elevation={3}
        sx={{ p: 3, mb: 3, textAlign: "center", borderRadius: "1rem", bgcolor: "#fafafa"}}
      >
        <Typography variant="h4" component="h2">
          Våra nöjdaste kunder
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Vad säger våra återkommande kunder?
        </Typography>
      </Paper>

      <Grid2 container spacing={3} justifyContent="center">
        {customers.map((customer) => (
          <Grid2 key={customer.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              sx={{
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: 6,
                },
                borderRadius: "1rem",
                bgcolor: "#fafafa"
              }}
            >
              <CardHeader
                avatar={
                  <Avatar
                    src={customer.avatarUrl}
                    sx={{ width: 56, height: 56 }}
                  />
                }
                title={customer.name}
                subheader={`Kund sedan ${customer.memberSince}`}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Rating value={customer.rating} precision={0.5} readOnly />
                <Typography variant="body2" color="text.secondary" mt={2}>
                  "{customer.comment}"
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

export default SatisfiedCustomers;
