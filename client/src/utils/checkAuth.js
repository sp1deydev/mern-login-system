import { handleLocalStorage } from "./handleLocalStorage";
import handleAuthToken from "./handleAuthToken";

const checkAuth = () => {
    const token = handleLocalStorage.get('access_token');
    if (!token) {
        return false
    }
    handleAuthToken(token)
    return true
};


export default checkAuth;