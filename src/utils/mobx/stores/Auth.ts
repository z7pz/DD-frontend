import { API } from "@utils/api";
import { makeAutoObservable } from "mobx";
import { User } from "../interfaces";
import State from "../State";
export class Auth {
  api = new API().auth;
  user: User;
  loggin = true;
  loggedIn = false;
  constructor(public state: State) {
    makeAutoObservable(this);
  }
  login(goto?: "landing" | "servers") {
    window.location.href = `http://localhost:3000/oauth/login${
      goto ? `?goto=${goto}` : ""
    }`;
  }
  logout() {
    this.api.logout();
    this.loggedIn = false;
  }
  async check() {
    try {
      const user = await this.state.dashboard.api.get_user();
      this.user = user;
      this.loggin = false;
      this.loggedIn = true;
      return true;
    } catch (err) {
      this.loggin = false;
      return false;
    }
  }
}
