import React, { useState, useEffect } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { styles } from "./ScreeningsModal.styles";
import { getAllMovieTitles } from "../../services/moviesService";
import { getHallInfoByNumber } from "../../services/hallService";
import { createScreening, updateScreening } from "../../services/screeningService";

const ScreeningModal = ({ open, handleClose, screening }) => {
  const [hallNumber, setHallNumber] = useState("");
  const [hallId, setHallId] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getAllMovieTitles();
        setMovieList(movies);
      } catch (error) {
        console.error("Error fetching movie titles:", error);
      }
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    if (screening) {
      setHallId(screening.hall_id);
      const hallNumberFromScreening = screening.Hall ? screening.Hall.name : "";
      setHallNumber(hallNumberFromScreening);
  
      // Отримання часу у форматі timestamp
      const timestamp = new Date(screening.date_time).getTime();
  
      // Перетворення timestamp у формат "yyyy-MM-dd"
      const dateObject = new Date(timestamp);
      const formattedDate = `${dateObject.getUTCFullYear()}-${(dateObject.getUTCMonth() + 1).toString().padStart(2, '0')}-${dateObject.getUTCDate().toString().padStart(2, '0')}`;
  
      // Перетворення timestamp у формат "HH:mm"
      const formattedTime = `${dateObject.getUTCHours().toString().padStart(2, '0')}:${dateObject.getUTCMinutes().toString().padStart(2, '0')}`;
      setDate(formattedDate); // Встановлення дати у форматі "yyyy-MM-dd"
      setTime(formattedTime); // Встановлення часу у форматі "HH:mm"
      setSelectedMovie(screening.movie_id);
    }
  }, [screening]);
  

  const handleSave = async () => {
    try {
      const hallInfo = await getHallInfoByNumber(hallNumber);
      setHallId(hallInfo.hall.id);

      const newScreeningData = {
        hall_id: hallInfo.hall.id,
        movie_id: selectedMovie,
        // Відправка часу у GMT форматі на сервер
        date_time: `${date}T${time}:00Z`,
      };

      if (screening) {
        // Редагування сеансу, якщо він вже існує
        await updateScreening(screening.id, newScreeningData);
        window.location.reload();
      } else {
        // Додавання нового сеансу
        await createScreening(newScreeningData);
        window.location.reload();
      }
      handleClose();
    } catch (error) {
      console.error("Error saving screening:", error);
    }
  };

  const handleCloseModal = () => {
    // Очищення значень при закритті модального вікна
    setHallNumber("");
    setHallId("");
    setDate("");
    setTime("");
    setSelectedMovie("");
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleCloseModal}>
      <Box sx={styles.modalWrapper}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Close sx={{ cursor: "pointer", borderRadius: "50%" }} onClick={handleCloseModal} />
        </Box>
        <Typography variant="h6" sx={styles.mainTitle} gutterBottom>
          {screening ? "Edit Screening" : "Add Screening"}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Hall Number"
              value={hallNumber}
              type="number"
              onChange={(e) => setHallNumber(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Select Movie</InputLabel>
              <Select
                value={selectedMovie}
                onChange={(e) => setSelectedMovie(e.target.value)}
              >
                {movieList.map((movie) => (
                  <MenuItem key={movie.id} value={movie.id}>
                    {movie.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="date"
              label="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="time"
              label="Time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button onClick={handleSave} variant="contained" color="primary" sx={styles.saveButton}>
                Save
              </Button>
              <Button sx={styles.cancelButton} onClick={handleCloseModal}>Cancel</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default ScreeningModal;
