import { makeAutoObservable, ObservableMap } from "mobx";
import State from "../State";
import { Server } from ".";
import { IServer } from "../interfaces";
interface Data {
  servers: IServer[];
}

export class Dashboard {
  server = new Server(this);
  servers: ObservableMap<string, IServer> = new ObservableMap();
  constructor(public state: State) {
    makeAutoObservable(this);
  }
  hydrate(data: Data) {
    data.servers.forEach((server) => this.servers.set(server.id, server));
  }
}
