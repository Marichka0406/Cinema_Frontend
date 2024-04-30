import { useState, useEffect } from "react";
import { getAllMovies } from "../../services/moviesService";
import NavBar from "../../components/NavBar/NavBar";
import AdminMoviesTable from "../../components/AdminMoviesTable/AdminMoviesTable";

const AdminMoviesPage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      async function fetchMovies() {
        try {
          const moviesData = await getAllMovies();
          setMovies(moviesData);
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
      }
  
      fetchMovies();
    }, []);

  return (
    <>
      <NavBar />
      <AdminMoviesTable movies={movies}/>
    </>
  );
};

export default AdminMoviesPage;
