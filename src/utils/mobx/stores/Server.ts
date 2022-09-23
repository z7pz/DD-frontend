import { makeAutoObservable } from "mobx";
import { IGuild } from "../interfaces";
import { Dashboard } from "./Dashboard";

export class Guild {
  name!: string;
  id!: string;
  icon!: string;
  constructor(public dashboard: Dashboard) {
    makeAutoObservable(this);
  }
  hydrate(data: IGuild) {
    Object.assign(this, data);
  }
}
