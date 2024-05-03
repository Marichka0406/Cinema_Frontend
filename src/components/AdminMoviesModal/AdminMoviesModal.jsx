import React from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { Close } from "@mui/icons-material";
import { styles } from "./AdminMoviesModal.styles";

const AdminMoviesModal = ({
  open,
  handleClose,
  movieData,
  setMovieData,
  onSave,
  allGenres,
  allActors,
  allDirectors,
  selectedMovie
}) => {
  const {
    title,
    releaseDate,
    duration,
    description,
    imageUrl, // Поле для URL зображення
    genres,
    actors,
    directors,
  } = movieData;

  const handleCloseModal = () => {
    handleClose();
    setMovieData({
      ...movieData,
      title: selectedMovie ? selectedMovie.title : "",
      releaseDate: selectedMovie ? selectedMovie.releaseDate : "",
      duration: selectedMovie ? selectedMovie.duration : "",
      description: selectedMovie ? selectedMovie.description : "",
      imageUrl: selectedMovie ? selectedMovie.imageUrl : "", // Зберігаємо значення для URL зображення
      genres: selectedMovie
        ? selectedMovie.genres.map((genre) => genre.id)
        : [],
      actors: selectedMovie ? selectedMovie.actors.map((actor) => actor.id) : [],
      directors: selectedMovie
        ? selectedMovie.directors.map((director) => director.id)
        : [],
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMovieData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Modal open={open} onClose={handleCloseModal}>
      <Box
        sx={styles.modalWrapper}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Close sx={{ cursor: "pointer", borderRadius: "50%" }} onClick={handleCloseModal} />
        </Box>
        <Typography variant="h6" sx={styles.mainTitle} gutterBottom>
          {selectedMovie ? "Edit Movie" : "Add Movie"}
        </Typography>
        <TextField
          label="Title"
          name="title"
          value={title}
          onChange={handleChange}
          fullWidth
          sx={{ mt: 1 }}
        />
        <TextField
          type="date"
          name="releaseDate"
          value={releaseDate}
          onChange={handleChange}
          fullWidth
          sx={{ mt: 1 }}
        />
        <TextField
          label="Duration"
          type="number"
          name="duration"
          value={duration}
          onChange={handleChange}
          fullWidth
          sx={{ mt: 1 }}
        />
        <TextField
          label="Description"
          name="description"
          value={description}
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
          sx={{ mt: 1 }}
        />
        <TextField
          label="Image URL" // Поле для введення URL зображення
          name="imageUrl"
          value={imageUrl}
          onChange={handleChange}
          fullWidth
          sx={{ mt: 1 }}
        />
        <Autocomplete
          multiple
          id="genres-autocomplete"
          options={allGenres}
          value={genres.map((genreId) =>
            allGenres.find((genre) => genre.id === genreId)
          )}
          getOptionLabel={(genre) => genre.name}
          onChange={(event, newValue) => {
            const newGenreIds = newValue.map((genre) => genre.id);
            setMovieData((prevData) => ({
              ...prevData,
              genres: newGenreIds,
            }));
          }}
          renderInput={(params) => (
            <TextField {...params} label="Genres" fullWidth sx={{ mt: 1 }} />
          )}
        />
        <Autocomplete
          multiple
          id="actors-autocomplete"
          options={allActors}
          value={actors.map((actorId) =>
            allActors.find((actor) => actor.id === actorId)
          )}
          getOptionLabel={(actor) => `${actor.first_name} ${actor.last_name}`}
          onChange={(event, newValue) => {
            const newActorIds = newValue.map((actor) => actor.id);
            setMovieData((prevData) => ({
              ...prevData,
              actors: newActorIds,
            }));
          }}
          renderInput={(params) => (
            <TextField {...params} label="Actors" fullWidth sx={{ mt: 1 }} />
          )}
        />
        <Autocomplete
          multiple
          id="directors-autocomplete"
          options={allDirectors}
          value={directors.map((directorId) =>
            allDirectors.find((director) => director.id === directorId)
          )}
          getOptionLabel={(director) => `${director.first_name} ${director.last_name}`}
          onChange={(event, newValue) => {
            const newDirectorIds = newValue.map((director) => director.id);
            setMovieData((prevData) => ({
              ...prevData,
              directors: newDirectorIds,
            }));
          }}
          renderInput={(params) => (
            <TextField {...params} label="Directors" fullWidth sx={{ mt: 2}} />
          )}
        />
        <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
          <Button sx={styles.saveButton} variant="contained" color="primary" onClick={onSave}>
            Save
          </Button>
          <Button sx={{ ...styles.cancelButton, ml: 2 }} onClick={handleCloseModal}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AdminMoviesModal;
