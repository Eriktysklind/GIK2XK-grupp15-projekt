import { Box, Rating, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { showRating } from "../services/ProductService"; 

function RatingAverage({ productId, value, rating = [], showValue = true }) {
  const [average, setAverage] = useState(0);

  useEffect(() => {
    if (value != null) {
      setAverage(value);
    } else if (rating.length > 0) {
      const avg = rating.reduce((sum, r) => sum + r.rating, 0) / rating.length;
      setAverage(avg);
    } else if (productId) {
      showRating(productId).then((fetchedRatings) => {
        if (fetchedRatings?.length) {
          const avg =
            fetchedRatings.reduce((sum, r) => sum + r.rating, 0) /
            fetchedRatings.length;
          setAverage(avg);
        }
      });
    }
  }, [productId, value, rating]);

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <Rating value={average} precision={0.5} readOnly />
      {showValue && (
        <Typography variant="body2">{average.toFixed(1)}</Typography>
      )}
    </Box>
  );
}

export default RatingAverage;