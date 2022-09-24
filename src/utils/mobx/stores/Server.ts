import { API } from "@utils/api";
import { makeAutoObservable } from "mobx";
import { IGuild } from "../interfaces";
import { Dashboard } from "./Dashboard";

export class Guild {
  api = new API().dashboard.guild;
  name: string;
  id: string;
  icon: string;
  prefix: string;
  language: string;
  fetched = false;
  constructor(public dashboard: Dashboard) {
    makeAutoObservable(this);
  }
  async fetch(id: string) {
    const guild = await this.api.get_guild(id);
    this.hydrate(guild);
    this.fetched = true;
  }
  hydrate(data: IGuild) {
    Object.assign(this, data);
  }
}
