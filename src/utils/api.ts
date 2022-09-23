import axios from "axios";
import { IGuild } from "./mobx/interfaces";
let baseURL = "http://localhost:3000";
const client = axios.create({ baseURL, withCredentials: true });

class Auth {
  async logout() {
    let res = await client.delete(`/oauth/logout`);
    return res.data;
  }
}
class Dashboard {
  async get_user() {
    const res = await client.get("/dashboard/user");
    return res.data;
  }
  async get_guilds() {
    const res = await client.get<IGuild[]>("/dashboard/guilds")
    return res.data;
  }
}

export class API {
  auth = new Auth();
  dashboard = new Dashboard();
}
