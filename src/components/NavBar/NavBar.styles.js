export const styles = {
  drawerWrapper: {
    textAlign: "center",
    color: "#fff",
    background: 'linear-gradient(to right, #880E4F, rgb(51, 11, 80))',
    height: "100%",
  },
  drawerElement: {
    color: "white",
    textAlign: "center",
    "&:hover": {
      background:'linear-gradient(to right, rgb(129, 11, 127), rgb(143, 16, 58), rgb(44, 30, 110))',
    },
  },
  drawerLink:{
    marginLeft: '8px',
    fontFamily: 'Montserrat'
  },
  navBarContainer: {
    background: 'linear-gradient(to right, #B71C1C, #880E4F, #673AB7)',
  },
  drawerIcon: {
    mr: 2,
    display: { sm: "none" },
  },
  navBarList: {
    display: { xs: "none", sm: "flex" },
    justifyContent: "space-between",
    flexGrow: 1,
    flexDirection: "row",
  },
  navBarLink:{
    textDecoration: 'none',
    color: 'white',
    width: '100%',
  },
  navBarText:{
    fontFamily: 'Montserrat'
  },
  navBarElement: {
    color: "white",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
};
