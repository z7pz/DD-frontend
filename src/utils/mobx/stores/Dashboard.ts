import { makeAutoObservable, ObservableMap } from "mobx";
import State from "../State";
import { Guild } from ".";
import { IGuild } from "../interfaces";
import { API } from "@utils/api";
interface Data {
  servers: IGuild[];
}

export class Dashboard {
  api = new API().dashboard;
  server = new Guild(this);
  guilds: ObservableMap<string, IGuild> = new ObservableMap();
  constructor(public state: State) {
    makeAutoObservable(this);
  }
  hydrate(data: Data) {
    data.servers.forEach((server) => this.guilds.set(server.id, server));
  }
  async fetch_guilds() {
    const servers = await this.api.get_guilds();
    this.hydrate({ servers });
  }
}
