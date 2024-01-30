import axios from "axios";

class UserService {
  getUsers() {
    const API = "http://localhost:4898/user/all";
    return axios.get(API);
  }
}

export default new UserService();
