import React, { useState } from "react";
import {
  Box,
  TextField,
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Викликається, коли користувач натискає кнопку "Увійти"
    // Тут можна виконати логіку перевірки інформації для входу і передати результат на зовнішню функцію onLogin
    onLogin(true);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
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
                onChange={handleChangeEmail}
                
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
                onChange={handleChangePassword}
              />
            </FormControl>
            <Button
              variant="contained"
              onClick={handleLogin}
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
