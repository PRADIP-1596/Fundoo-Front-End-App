import axios from "axios";


class axiosservice {
  postMethod = (url, data, isHeaderRequired) => {
    return axios.post(url, data, isHeaderRequired);
  };
  
  getMethod = (url, data, isHeaderRequired) => {
    console.log(data);
    return axios.get(url, data, isHeaderRequired);
  };
  deleteMethod = (url, isHeaderRequired) => {
    return axios.delete(url, isHeaderRequired);
  };
  
}

export default axiosservice;