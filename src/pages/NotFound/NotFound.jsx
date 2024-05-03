import React from "react";
import { Box } from "@mui/material";
import NotFoundImage from "../../images/404-error.jpg";

const NotFound = () => {
  return (
    <Box
      style={{
        backgroundImage: `url(${NotFoundImage})`,
        backgroundSize: "cover", // Зменшуємо розмір зображення на 50%
        backgroundPosition: "center",
        width: "100%",
        height: "100vh", // Задайте висоту за необхідністю
      }}
    >
    </Box>
  );
};

export default NotFound;
