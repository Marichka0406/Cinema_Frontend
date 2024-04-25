import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Image1 from "../../images/ticket-image.jpeg";
import Image2 from "../../images/people.jpg"; 
import { styles } from "./InfoCards.styles";

const InfoCards = () => {
  return (
    <Grid sx ={styles.wrapper} container spacing={2}>
      <Grid item xs={12} md={6}>
        <Card sx ={styles.card}>
          <CardMedia
            component="img"
            height="140"
            image={Image1}
            alt="Image 1"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              Tickets Reservation
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Discover how easy and fast it is to reserve tickets for your favorite movies at our theater. Simply choose the movie, date, time and your tickets will be ready!
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card sx ={styles.card}>
          <CardMedia
            component="img"
            height="140"
            image={Image2}
            alt="Image 2"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              Cinematic Experience
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Immerse yourself in the atmosphere of a real cinema in our establishment. A large screen, powerful sound, and comfortable seating will provide you with unforgettable experiences from movie watching.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default InfoCards;
