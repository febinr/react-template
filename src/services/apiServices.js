import axios from "axios";
import querystring from "querystring";

export const instance = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (p) => {
    const params = { ...p };
    return querystring.stringify(params, "&", "=", { arrayFormat: "repeat" });
  },
});
const apiRequest = (options, skip = false) => {

  const onSuccess = (response) => {
      return response;
  };

  const onError = (error) => {
    if (error.response) {
      if (!skip && error.response.status === 401) {
        //We need to decide about the error code so as to logout
  
        return {};
      }
    } else {
      console.error("Error Message:", error.message);
    }

    return Promise.reject(error.response || error.message);
  };
  instance.defaults.timeout = 980000;
  return instance({ ...options })
    .then(onSuccess)
    .catch(onError);
};

export default apiRequest;
