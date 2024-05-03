export const styles = {
    topContainer:{
     display:"flex",
     marginBottom:"5px",
     marginTop: "75px"
    },
    searchBar:{
        marginLeft:"5px",
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
    actionIcon:{
        color: '#880E4F', 
        cursor:'pointer', 
        mr:"2px"
    },
    headerText:{
        fontSize:"25px",
        fontWeight:"bold",
        fontFamily:"Monserrat",
        color:"#880E4F" 
    },
    mainText:{
        fontFamily:"Monserrat",
        fontSize:"20px",
        cursor:"default"
    },
    button:{
        background: 'linear-gradient(to right, #B71C1C, #880E4F, #673AB7)',
        color: '#fff',
        '&:hover': {
          background: 'linear-gradient(to right, #77052F, #880E4F, #0A0A53)',
        },
        borderRadius: '10px',
        fontFamily: 'Montserrat',
        fontWeight: '500',
        fontSize: '16px',
        marginLeft:"10px"
    }
};
  