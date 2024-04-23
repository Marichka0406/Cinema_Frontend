export const styles = (flipped) => ({
    cardWrapper: {
      perspective: '1000px'
    },
    card: {
      m: 10,
      width: 300,
      height: 400,
      transition: "transform 0.85s",
      transformStyle: "preserve-3d",
      transform: flipped ? "rotateY(180deg)" : "none",
    },
    cardContent:{
      transform: 'rotateY(180deg)'
    }
  });
  