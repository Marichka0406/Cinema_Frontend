import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  CircularProgress, // Додано компонент для індикатора завантаження
} from "@mui/material";
import { getAllActors } from "../../services/actorsService";
import { getAllGenres } from "../../services/genresService";
import { getAllDirectors } from "../../services/directorsService";
import AdminMoviesModal from "../AdminMoviesModal/AdminMoviesModal";
import { createMovie, deleteMovie, updateMovie } from "../../services/moviesService";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { styles } from "./AdminMoviesTable.styles";
import { Search as SearchIcon,   SaveAlt as SaveAltIcon, } from "@mui/icons-material";

const AdminMoviesTable = ({ movies }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movieData, setMovieData] = useState({
    title: "",
    releaseDate: "",
    duration: "",
    imageUrl: "",
    description: "", // Додали поле description
    genres: [],
    actors: [],
    directors: [],
  });
  const [allGenres, setAllGenres] = useState([]);
  const [allActors, setAllActors] = useState([]);
  const [allDirectors, setAllDirectors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true); // Додано стан для індикатора завантаження

  const userRole = sessionStorage.getItem("role");
  const isSuperAdmin = userRole === "SuperAdmin";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const genresData = await getAllGenres();
        const actorsData = await getAllActors();
        const directorsData = await getAllDirectors();

        setAllGenres(genresData);
        setAllActors(actorsData);
        setAllDirectors(directorsData);
        setLoading(false); // Встановлюємо loading в false після завантаження даних
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleOpenModal = (movie) => {
    setSelectedMovie(movie);
    if (movie) {
      setMovieData({
        title: movie.title,
        releaseDate: movie.release_date,
        duration: movie.duration,
        imageUrl: movie.movie_image,
        description: movie.description, // Оновлюємо значення опису фільму
        genres: movie.genres.map((genre) => genre.id),
        actors: movie.actors.map((actor) => actor.id),
        directors: movie.directors.map((director) => director.id),
      });
    } else {
      setMovieData({
        title: "",
        releaseDate: "",
        duration: "",
        imageUrl: "",
        description: "", // Додали поле description
        genres: [],
        actors: [],
        directors: [],
      });
    }
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
    setOpenModal(false);
  };

  const handleUpdateMovie = async () => {
    try {
      await updateMovie(selectedMovie.id, movieData);
      handleCloseModal();
      window.location.reload();
    } catch (error) {
      console.error("Error updating movie:", error);
    }
  };

  const handleSaveMovie = async () => {
    if (!selectedMovie) {
      try {
        await createMovie(movieData);
        handleCloseModal();
        window.location.reload();
      } catch (error) {
        console.error("Error creating movie:", error);
      }
    } else {
      handleUpdateMovie();
    }
  };

  const handleDeleteMovie = async (id) => {
    try {
      await deleteMovie(id);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };

  const handleExportToJson = () => {
    const jsonMovies = JSON.stringify(movies, null, 2);
    const blob = new Blob([jsonMovies], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "movies.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const sortedMovies = movies.slice().sort((a, b) => new Date(b.release_date) - new Date(a.release_date));

  const filteredMovies = sortedMovies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div style={{ ...styles.topContainer, marginTop: "75px", position: "relative" }}>
        {/* Додано індикатор завантаження */}
        {loading && (
          <CircularProgress
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
        <Button sx={styles.button} onClick={() => handleOpenModal(null)} startIcon={<AddIcon />}>
          Add Movie
        </Button>
        <Button
          sx={{ ...styles.button}}
          onClick={handleExportToJson}
          variant="outlined"
          color="primary"
          startIcon={<SaveAltIcon />}
        >
          Export
        </Button>
        <TextField
          label="Search by title"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon sx={{color:"#673AB7"}}/>
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={styles.searchBar}
        />
        
      </div>
      <TableContainer component={Paper} sx={{marginTop:"10px", marginLeft:"10px"}}>
        <Table>
          <TableHead>
            <TableRow sx={styles.headerText}>
              <TableCell sx={{ ...styles.headerText, maxWidth: "150px" }} align="center">
                Title
              </TableCell>
              <TableCell sx={{ ...styles.headerText, maxWidth: "100px" }} align="center">
                Release Date
              </TableCell>
              <TableCell sx={{ ...styles.headerText, maxWidth: "100px" }} align="center">
                Duration
              </TableCell>
              <TableCell sx={{ ...styles.headerText, maxWidth: "200px" }} align="center">
                Image
              </TableCell>
              <TableCell sx={{ ...styles.headerText, maxWidth: "300px" }} align="center">
                Description
              </TableCell>
              <TableCell sx={{ ...styles.headerText, maxWidth: "100px" }} align="center">
                Genres
              </TableCell>
              <TableCell sx={{ ...styles.headerText, maxWidth: "150px" }} align="center">
                Actors
              </TableCell>
              <TableCell sx={{ ...styles.headerText, maxWidth: "150px" }} align="center">
                Directors
              </TableCell>
              <TableCell sx={{ ...styles.headerText, maxWidth: "100px" }} align="center">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredMovies.map((movie) => (
              <TableRow key={movie.id}>
                <TableCell sx={{ ...styles.mainText, maxWidth: "150px" }} align="center">
                  {movie.title}
                </TableCell>
                <TableCell sx={{ ...styles.mainText, maxWidth: "150px" }} align="center">
                  {movie.release_date}
                </TableCell>
                <TableCell sx={{ ...styles.mainText, maxWidth: "100px" }} align="center">
                  {movie.duration} min
                </TableCell>
                <TableCell>
                  <img
                    src={movie.movie_image}
                    alt="Movie Image"
                    style={{ maxWidth: "180px", maxHeight: "100px" }}
                  />
                </TableCell>
                <TableCell sx={{ ...styles.mainText, maxWidth: "300px" }}>
                  {movie.description}
                </TableCell>
                <TableCell sx={{ ...styles.mainText, maxWidth: "100px" }} align="center">
                  {movie.genres.map((genre, index) => (
                    <span key={genre.id}>
                      {genre.name}
                      {index !== movie.genres.length - 1 && ", "}
                    </span>
                  ))}
                </TableCell>
                <TableCell sx={{ ...styles.mainText, maxWidth: "150px" }} align="center">
                  {movie.actors.map((actor, index) => (
                    <span key={actor.id}>
                      {actor.first_name} {actor.last_name}
                      {index !== movie.actors.length - 1 && ", "}
                    </span>
                  ))}
                </TableCell>
                <TableCell sx={{ ...styles.mainText, maxWidth: "150px" }} align="center">
                  {movie.directors.map((director, index) => (
                    <span key={director.id}>
                      {director.first_name} {director.last_name}
                      {index !== movie.directors.length - 1 && ", "}
                    </span>
                  ))}
                </TableCell>
                <TableCell sx={{ maxWidth: "100px" }} align="center">
                  <EditIcon
                    sx={styles.actionIcon}
                    onClick={() => handleOpenModal(movie)}
                  />
                  <DeleteIcon
                    onClick={() => handleDeleteMovie(movie.id)}
                    sx={{ ...styles.actionIcon, cursor: isSuperAdmin ? "pointer" : "not-allowed" }}
                    disabled={!isSuperAdmin}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <AdminMoviesModal
        open={openModal}
        handleClose={handleCloseModal}
        movieData={movieData}
        setMovieData={setMovieData}
        allGenres={allGenres}
        allActors={allActors}
        allDirectors={allDirectors}
        onSave={handleSaveMovie}
        selectedMovie={selectedMovie}
      />
    </>
  );
};

export default AdminMoviesTable;
