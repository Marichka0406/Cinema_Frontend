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
               <img src={movie.movie_image} alt={movie.title} style={{ maxWidth: '100%', height:'300px' }} />
              <Typography sx={styles(flipped).mainTitle} gutterBottom variant="h5" component="div">
                {movie.title}
              </Typography>
              <Typography sx={styles(flipped).text} variant="body2" color="text.secondary">
               <span style={styles(flipped).subtitle} >Release Date:</span>  {movie.release_date}
              </Typography>
              <Typography sx={styles(flipped).text} variant="body2" color="text.secondary">
                <span style={styles(flipped).subtitle} >Duration:</span> {movie.duration} min
              </Typography>
              <Typography sx={styles(flipped).text} variant="body2" color="text.secondary">
                <span style={styles(flipped).subtitle} >Actors:</span> {movie.actors.map(actor => `${actor.first_name} ${actor.last_name}`).join(', ')}
              </Typography>
              <Typography sx={styles(flipped).text} variant="body2" color="text.secondary">
                <span style={styles(flipped).subtitle} >Directors:</span>{movie.directors.map(director => `${director.first_name} ${director.last_name}`).join(', ')}
              </Typography>
              <Typography sx={styles(flipped).text} variant="body2" color="text.secondary">
                <span style={styles(flipped).subtitle} >Genres:</span> {movie.genres.map(genre => genre.name).join(', ')}
              </Typography>
              <Typography sx={styles(flipped).text} variant="body2" color="text.secondary">
                <span style={styles(flipped).subtitle} >Description:</span>{movie.description}
              </Typography>
            </Box>
          ) : (
            <Box sx={styles(flipped).cardContent}>
              <Typography sx={styles(flipped).mainTitle} gutterBottom variant="h5" component="div">
                Screenings
              </Typography>
              <Typography sx={styles(flipped).text} variant="body2" color="text.secondary">
                Date: 22-04-2023
              </Typography>
              <Typography sx={styles(flipped).text} variant="body2" color="text.secondary">
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
