import axios from "axios";
import { IGuild } from "./mobx/interfaces";
import { Language } from "./mobx/stores/Language";
import { Prefix } from "./mobx/stores/Prefix";
let baseURL = "http://localhost:3000";
const client = axios.create({ baseURL, withCredentials: true });

class Auth {
  async logout() {
    let res = await client.delete(`/oauth/logout`);
    return res.data;
  }
}

class Guild {
  constructor(public dashboard: Dashboard) {}
  async get_guild(id: string) {
    const res = await client.get<IGuild>("/dashboard/guild/" + id);
    return res.data;
  }
  async save_prefix(id: string, prefix: Prefix) {
    const res = await client.post(
      "/dashboard/guild/" + id + "/prefix",
      prefix.toJSON()
    );
    return res;
  }
  async save_language(id: string, language: Language) {
    const res = await client.post(
      "/dashboard/guild/" + id + "/language",
      language.toJSON()
    );
    return res;
  }
}

class Dashboard {
  guild = new Guild(this);
  async get_user() {
    const res = await client.get("/dashboard/user");
    return res.data;
  }
  async get_guilds() {
    const res = await client.get<IGuild[]>("/dashboard/guilds");
    return res.data;
  }
}

export class API {
  auth = new Auth();
  dashboard = new Dashboard();
}
