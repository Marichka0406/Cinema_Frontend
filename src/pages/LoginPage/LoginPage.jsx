import { useState } from "react";
import { useAuth } from '../../contexts/authContext';
import { useNavigate } from "react-router-dom";
import { loginService } from "../../services/loginService"; 
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
    password: "",
  });

  const { handleLogin } = useAuth();
  const navigate = useNavigate();
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
    try {
      const response = await loginService(formData); 
      if (response.status === 200) {
        sessionStorage.setItem('userId', response.id);
        sessionStorage.setItem('username', response.username);
        sessionStorage.setItem('role', response.role);
        const isAdminOrSuperAdmin = response.role === 'Admin' || response.role === 'SuperAdmin';
        handleLogin(true, isAdminOrSuperAdmin);
        navigate('/home') 

      } else {
        toast.error("Login failed. Please try again.");
        handleLogin(false, false); 
      }
    } catch (error) {
      // Помилка під час виконання запиту
      toast.error(error);
    }
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
                name="password"
                value={formData.password}
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
