import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import {addRating} from '../services/ProductService'
import { useState } from 'react';

const labels = {
    0.5: '0.5',
    1: '1',
    1.5: '1.5',
    2: '2',
    2.5: '2.5',
    3: '3',
    3.5: '3.5',
    4: '4',
    4.5: '4.5',
    5: '5',
  };

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? 'r' : ''}, ${labels[value]}`;
  }

function RatingForm({productId}) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(-1);

    const handleSubmit = async (newRating) => {
        try {
            await addRating(productId, newRating )
        } catch (e) {
            e?.response ? console.log(e.response.data) : console.log(e);
        }
    }
    
        return (
          <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
            <Rating
              name="hover-feedback"
              rating={rating}
              precision={0.5}
              getLabelText={getLabelText}
              onChange={(event, newValue) => {
                setRating(newValue);
                handleSubmit(newValue)
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {rating !== null && (
              <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : rating]}</Box>
            )}
          </Box>
        );
      }

export default RatingForm;