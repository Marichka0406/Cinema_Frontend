import React from "react";
import { Link } from "react-router-dom";
import {Box, Button, Typography} from "@mui/material";
import TheaterImage from "../../images/cinema.jpg"; 
import { styles } from "./WelcomeBlock.styles";

const WelcomeBlock = () => {
  return (
    <>
    <Box
    sx={styles(TheaterImage).wrapper}
    >
      <Typography sx={styles(TheaterImage).welcomeBlockTitle} >
        Welcome to Our Movie Theater!
      </Typography>
      <Typography sx={styles(TheaterImage).welcomeBlockText} >
        Are you ready for an unforgettable cinematic experience?
      </Typography>
      <Link to="/movies" style={{ textDecoration: "none" }}>
        <Button variant="contained" sx={styles(TheaterImage).welcomeButton}>
          Go to Movies
        </Button>
      </Link>
    </Box>
    </>
  );
};

export default WelcomeBlock;
