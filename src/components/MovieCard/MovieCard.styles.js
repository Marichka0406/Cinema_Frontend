export const styles = (flipped) => ({
    cardWrapper: {
      perspective: '1000px'
    },
    card: {
      mt:10,
      ml:5,
      width: 300,
      height: 500,
      transition: "transform 0.85s",
      transformStyle: "preserve-3d",
      transform: flipped ? "rotateY(180deg)" : "none",
    },
    cardContent:{
      transform: 'rotateY(180deg)'
    },
    contentBox:{
      display:"flex",
      flexDirection:"column",
      gap:"12px",
      cursore:"pointer"
    },
    mainTitle:{
     color:"#880E4F",
     fontFamily:"Monserrat",
     fontSize:"30px",
     fontWeight:'500'
     
    },
    text:{
      color:"black",
      fontFamily:"Monserrat",
      fontSize:"15px",
      cursor:"default"
    }
  });
  