import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { styles } from './MovieCard.styles';
import { getScreeningsByMovieId } from '../../services/screeningService';

const MovieCard = ({ movie }) => {
  const [flipped, setFlipped] = useState(false);
  const [screenings, setScreenings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchScreenings = async () => {
      try {
        const data = await getScreeningsByMovieId(movie.id);
        setScreenings(data);
      } catch (error) {
        console.error('Error fetching screenings data:', error);
      }
    };

    fetchScreenings();
  }, [movie.id]);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleBookTickets = (screeningId) => {
    navigate(`/tickets/${screeningId}`);
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
                <span style={styles(flipped).subtitle} >Director(s):</span>{movie.directors.map(director => `${director.first_name} ${director.last_name}`).join(', ')}
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
              {screenings.map(screening => (
                <Box key={screening.id}>
                  <Typography sx={{...styles(flipped).text, marginTop: '15px'}} variant="body2" color="text.secondary">
                    <span style={styles(flipped).subtitle}>Date:</span>  {screening.date_time.split('T')[0]}
                  </Typography>
                  <Typography sx={styles(flipped).text} variant="body2" color="text.secondary">
                    <span style={styles(flipped).subtitle}>Hours:</span> {screening.date_time.split('T')[1].slice(0, 5).split(', ').map(time => (
                      <Button sx={styles(flipped).button} key={time} variant="outlined" onClick={() => handleBookTickets(screening.id, time)}>{time}</Button>
                    ))}
                  </Typography>
                </Box>
              ))}
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default MovieCard;
