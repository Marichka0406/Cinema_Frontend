import React, { useEffect, useState } from "react";
import { Grid, TextField, InputAdornment, IconButton, Box} from "@mui/material";
import MovieCard from "../../components/MovieCard/MovieCard";
import { getAllMovies } from "../../services/moviesService";
import NavBar from "../../components/NavBar/NavBar";
import { styles } from "./MoviesPage.styles";
import { Search as SearchIcon } from "@mui/icons-material";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      try {
        const moviesData = await getAllMovies();
        // Сортуємо фільми за датою виходу
        moviesData.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
        setMovies(moviesData);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }

    fetchMovies();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <NavBar />
      <Box sx={styles.wrapper}>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        sx={styles.searchBar}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon sx={{ color: "#673AB7" }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      /></Box>
      <Grid container spacing={2}>
        {filteredMovies.map((movie) => (
          <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MoviesPage;
