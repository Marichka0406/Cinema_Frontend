export const styles = {
    modalContainer: {
      position: "absolute",
      width: 400,
      backgroundColor: "white",
      border: "1px solid #fff",
      borderRadius: 16, 
      boxShadow: 24,
      padding: 16,
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      outline: "none",
    },
    modalTitle: {
      marginTop: 5,
      marginBottom: 5,
      fontSize:"30px",
      fontWeight:"bold",
      fontFamily:"Monserrat",
      color:"#880E4F"
    },
    modalDescription: {
      marginBottom: 10,
      fontSize:"20px",
      fontFamily:"Monserrat"
    },
    modalButton: {
      display: "block",
      margin: "0 auto",
      marginBottom:2,
      background: 'linear-gradient(to right, #B71C1C, #880E4F, #673AB7)',
      color: '#fff',
      '&:hover': {
        background: 'linear-gradient(to right, #77052F, #880E4F, #0A0A53)',
      },
      borderRadius: '10px',
      fontFamily: 'Montserrat',
      fontWeight: '500',
      fontSize: '16px',
      width:"200px"
    },
    closeButton: {
      position: "absolute",
      top: 0,
      right: 0,
      color: "rgba(0, 0, 0, 0.54)",
    },
  };
  