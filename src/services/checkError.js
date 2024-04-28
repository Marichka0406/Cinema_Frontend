import { toast } from 'react-toastify';

const checkErrorAndNotify = (error) => {
    if (error.response && error.response.data && error.response.data.message === "Sorry! You have no rights") {
        toast.error("Sorry! You have no rights");
        return true;
    }
    return false; 
};

export default checkErrorAndNotify;