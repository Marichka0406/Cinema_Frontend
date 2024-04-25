import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import MovieCard from "../../components/MovieCard/MovieCard";
import { getAllMovies } from '../../services/moviesService';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const moviesData = await getAllMovies();
        setMovies(moviesData);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <Grid container spacing={2}>
      {movies.map((movie) => (
        <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MoviesPage;
