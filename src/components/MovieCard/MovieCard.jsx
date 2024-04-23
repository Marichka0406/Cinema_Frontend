import React, { useState } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styles } from './MovieCard.styles';

const MovieCard = () => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <Box sx={styles(flipped).cardWrapper} onClick={handleFlip}>
      <Card sx={styles(flipped).card}>
        <CardContent>
          {!flipped ? (
            <Box>
              <Typography gutterBottom variant="h5" component="div">
                Movie Title
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Movie Description
              </Typography>
            </Box>
          ) : (
            <Box sx = {styles(flipped).cardContent}>
              <Typography gutterBottom variant="h5" component="div">
                Showtimes
              </Typography>
              <Typography variant="body2" color="text.secondary">
                10:00 AM, 1:00 PM, 4:00 PM
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default MovieCard;
