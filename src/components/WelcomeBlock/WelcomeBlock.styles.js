export const styles = (TheaterImage) => ({
  wrapper: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${TheaterImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  welcomeBlockTitle: {
    color: "white",
    fontSize: "60px",
    fontFamily: "Monserrat",
  },
  welcomeBlockText: {
    display:"flex",
    alignItems:"center",
    color: "white",
    fontSize: "25px",
    fontFamily: "Monserrat",
  },
  welcomeButton: {
    mt:2,
    background: "linear-gradient(to right, #B71C1C, #880E4F, #673AB7)",
    color: "#fff",
    width: "100%",
    "&:hover": {
      background: "linear-gradient(to right, #77052F , #880E4F, #0A0A53)",
    },
    borderRadius: "20px",
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: "25px",
    textTransform: "none"
  },
});
