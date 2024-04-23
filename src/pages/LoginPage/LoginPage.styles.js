export const styles = {
  formWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(to right, #B71C1C, #880E4F, #673AB7)',
  },
  formContainer: {
    p: '20px',
    maxWidth: '400px',
    m: 'auto',
    backgroundColor: '#E3C6E7',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.7)',
    borderRadius: '14px',
  },
  title: {
    textAlign: 'center',
    mb: '30px',
    color: '#4e342e',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: '40px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
    background: 'linear-gradient(to right, #B71C1C, #880E4F, #673AB7)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  input: {
    width:'100%',
    backgroundColor: '#EDF5FF',
    mb: '35px',
    '& label': {
      color: '#B71C1C',
      fontSize: '17px',
      fontWeight: '600',
    },
    '& label.Mui-focused': {
      color: '#673AB7',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#B71C1C',
        borderWidth: '3px',
        borderStyle: 'solid',
      },
      '&:hover fieldset': {
        borderColor: '#B71C1C',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#673AB7',
      },
      '& .MuiInputBase-input': {
        fontFamily: 'Montserrat',
        fontSize: '16px',
        fontWeight: '500',
      },
      '& .MuiIconButton-root': {
        color: '#B71C1C', 
      },
      '&.Mui-focused .MuiIconButton-root': {
        color: '#673AB7', 
      },     
    },
  },
  button: {
    background: 'linear-gradient(to right, #B71C1C, #880E4F, #673AB7)',
    color: '#fff',
    width: '100%',
    '&:hover': {
      background: 'linear-gradient(to right, #77052F , #880E4F, #0A0A53)',
    },
    borderRadius: '20px',
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: '18px',
  },
};
