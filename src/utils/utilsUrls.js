import axios from "axios";
import reduxActions from "../redux/reduxActions";

const MAIN_URL = process.env.REACT_APP_NODE_DOMAIN

export const urlPostMethod = async (url, body) => {
    const sentUrl = `${MAIN_URL}${url}`;
    const token = reduxActions.getAccessToken()
    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    };
    const timeout = 30000;
    const data = body;

    return await axios.post(sentUrl, data, { headers, timeout: timeout })
      .then(response => {
        if (response.status === 200) {
            return response.data
        }
      })
      .catch(err => {
        return {
            errMsg: err.response?.data.error || err.response?.statusText || err.message,
            status: err.response?.status
        }
    });
}