import StartPage from "./pages/StartPage/StartPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return(
  <>
    <StartPage />
    <ToastContainer />
  </>
  )
};

export default App;
