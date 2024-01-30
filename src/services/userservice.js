import axios from "axios";

class UserService {
  getUsers() {
    const API = "http://localhost:4898/user/all";
    return axios.get(API);
  }

  logIn(data) {
    const API = "http://localhost:4898/user/signin";
    return axios.post(API, data);
  }
  signUp(data) {
    const API = "http://localhost:4898/user/signup";
    return axios.post(API, data);
  }
}

export default new UserService();
