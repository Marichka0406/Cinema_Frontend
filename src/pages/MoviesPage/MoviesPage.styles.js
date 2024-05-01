export const styles = {
    wrapper:{
        maxWidth: '675px',  
        marginTop:'70px',
        marginLeft:'32px'
    },
    searchBar:{
        backgroundColor: '#EDF5FF',
        '& label': {
          color: '#673AB7',
          fontSize: '17px',
          fontWeight: '600',
        },
        '& label.Mui-focused': {
          color: '#673AB7',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#673AB7',
            borderWidth: '3px',
            borderStyle: 'solid',
          },
          '&:hover fieldset': {
            borderColor: '#673AB7',
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
        }
    },
};