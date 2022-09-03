import { makeAutoObservable } from "mobx";
export class Auth {
  user?: unknown = {username: "Mr.Kasper", "icon": "https://cdn.discordapp.com/avatars/508449321176268801/e2d249a2ea1151fb05b54a377dce104c.png?size=1024"};
  isLoggedIn = false;
  constructor() {
    makeAutoObservable(this);
  }
}
