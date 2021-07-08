import axios from "axios";

const api = ({ method, url, data, withCredentials = true }) => {
  let request;
  request = axios({
    method,
    url: `${process.env.REACT_APP_ACCOUNTS_URL}${url}`,
    data,
    withCredentials,
  });
  return request
    .then((response) => {
      if (response && response.status === "Bad Request") {
        // toast.error("Something went wrong")
      }
      return response;
    })
    .catch((error) => {
      if (error && error.name === "QueryFailedError") {
        // toast.error(error.name)
      }
      return error;
    });
};
export default api;
