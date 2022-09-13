import { makeAutoObservable } from "mobx";
import { IServer } from "../interfaces";
import { Dashboard } from "./Dashboard";

export class Server {
  name!: string;
  id!: string;
  icon!: string;
  constructor(public dashboard: Dashboard) {
    makeAutoObservable(this);
  }
  hydrate(data: IServer) {
    Object.assign(this, data);
  }
}
