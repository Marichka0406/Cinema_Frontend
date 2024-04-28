import { useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { styles } from "./LoginPage.styles";

const LoginPage = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    pwd: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    onLogin(true);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={styles.formWrapper}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={styles.formContainer}>
            <Typography variant="h5" sx={styles.title}>
              Login
            </Typography>
            <FormControl fullWidth sx={styles.input} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-email">
                Email
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-email"
                type="email"
                label="Email*"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl fullWidth sx={styles.input} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                name="pwd"
                value={formData.pwd}
                onChange={handleChange}
              />
            </FormControl>
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={styles.button}
            >
              Login
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;
