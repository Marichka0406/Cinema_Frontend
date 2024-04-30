export const styles = {
    modalWrapper:{
        position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          minWidth: 300,
          maxWidth: 500, 
          borderColor:"white",
          borderRadius: 2, 
          overflowY: "auto", 
          maxHeight: "90vh", 
          "&::-webkit-scrollbar": {
            display: "none", 
          },
          "-ms-overflow-style": "none", 
          scrollbarWidth: "none",
    },
    mainTitle:{
        fontSize:"30px",
        fontWeight:"bold",
        fontFamily:"Monserrat",
        color:"#880E4F",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    saveButton:{
        background: 'linear-gradient(to right, #B71C1C, #880E4F, #673AB7)',
        color: '#fff',
        '&:hover': {
          background: 'linear-gradient(to right, #77052F, #880E4F, #0A0A53)',
        },
        borderRadius: '10px',
        fontFamily: 'Montserrat',
        fontWeight: '500',
        fontSize: '16px'
    },
    cancelButton:{
        background: 'linear-gradient(to right, #B71C1C, #880E4F, #673AB7)',
        color: '#fff',
        '&:hover': {
          background: 'linear-gradient(to right, #77052F, #880E4F, #0A0A53)',
        },
        borderRadius: '15px',
        fontFamily: 'Montserrat',
        fontWeight: '500',
        fontSize: '16px'
    }
};
  