import InfoCards from "../../components/InfoCards/InfoCards";
import WelcomeBlock from "../../components/WelcomeBlock/WelcomeBlock";
import { Box } from "@mui/material";
import { styles } from "./HomePage.styles";

const HomePage = () => {
  return (
    <>
      <Box sx={styles.wrapper}>
        <WelcomeBlock />
      </Box>
    </>
  );
};

export default HomePage;
