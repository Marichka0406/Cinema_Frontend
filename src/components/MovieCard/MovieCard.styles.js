export const styles = (flipped) => ({
    cardWrapper: {
      perspective: '1000px'
    },
    card: {
      mt:5,
      ml:4,
      width: 300,
      height: 500,
      transition: "transform 0.85s",
      transformStyle: "preserve-3d",
      transform: flipped ? "rotateY(180deg)" : "none",
    },
    cardContent:{
      overflowY: 'auto',
      maxHeight: '500px',
      paddingBottom: '20px',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
      transform: 'rotateY(180deg)',
    },
    contentBox:{
      display:"flex",
      flexDirection:"column",
      gap:"12px",
      cursore:"pointer",
      overflowY: 'auto',
      maxHeight: '500px',
      paddingBottom: '20px',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
   
    mainTitle:{
     color:"#880E4F",
     fontFamily:"Monserrat",
     fontSize:"30px",
     fontWeight:'bold',
     cursor:"default",
     textAlign: "center" 
    },
    subtitle:{
      fontWeight:"bold",
      color:"#880E4F",
      fontSize:"18px",
    },
    text:{
      color:"black",
      fontFamily:"Monserrat",
      fontSize:"16px",
      cursor:"default"
    },
    button: {
      background: 'linear-gradient(to right, #B71C1C, #880E4F, #673AB7)',
      color: '#fff',
      '&:hover': {
        background: 'linear-gradient(to right, #77052F, #880E4F, #0A0A53)',
      },
      borderRadius: '10px',
      fontFamily: 'Montserrat',
      fontWeight: '500',
      fontSize: '16px',
    }
  });
  