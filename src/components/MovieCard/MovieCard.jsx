import React, { useState } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styles } from './MovieCard.styles';

const MovieCard = ({ movie }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <Box sx={styles(flipped).cardWrapper} onClick={handleFlip}>
      <Card sx={styles(flipped).card}>
        <CardContent>
          {!flipped ? (
            <Box sx={styles(flipped).contentBox}>
              <Typography sx ={styles(flipped).mainTitle} gutterBottom variant="h5" component="div">
                {movie.title}
              </Typography>
              <Typography sx ={styles(flipped).text} variant="body2" color="text.secondary">
                Release Date: {movie.release_date}
              </Typography>
              <Typography sx ={styles(flipped).text} variant="body2" color="text.secondary">
                Duration: {movie.duration} min
              </Typography>
              <Typography sx ={styles(flipped).text} variant="body2" color="text.secondary">
                Actors: 
              </Typography>
              <Typography sx ={styles(flipped).text} variant="body2" color="text.secondary">
                Directors: 
              </Typography>
              <Typography sx ={styles(flipped).text} variant="body2" color="text.secondary">
                Genres: 
              </Typography>
              <Typography sx ={styles(flipped).text} variant="body2" color="text.secondary">
                Description: {movie.description}
              </Typography>
            </Box>
          ) : (
            <Box sx={styles(flipped).cardContent}>
              <Typography sx ={styles(flipped).mainTitle} gutterBottom variant="h5" component="div">
                Screenings
              </Typography>
              <Typography sx ={styles(flipped).text} variant="body2" color="text.secondary">
                Date: 22-04-2023
              </Typography>
              <Typography sx ={styles(flipped).text} variant="body2" color="text.secondary">
                Time: 17:00, 18:00
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default MovieCard;
