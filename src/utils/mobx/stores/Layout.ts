import { makeAutoObservable } from "mobx";
import { IGuild } from "../interfaces";
import { Dashboard } from "./Dashboard";
import { Language } from "./Language";
import { Prefix } from "./Prefix";

interface Data {
  prefix: string;
  language: string;
}

export class Layout {
  prefix = new Prefix(this);
  language = new Language(this);
  constructor(public dashboard: Dashboard) {
    makeAutoObservable(this);
  }
  hydrate(data: Data) {
    this.prefix.hydrate(data.prefix)
    this.language.hydrate(data.prefix)
  }
  get prefix_changed() {
    return !(this.dashboard.guild.prefix == this.prefix.value);
  }
  get language_changed() {
    return !(this.dashboard.guild.prefix == this.language.value);
  }
  save(id: string) {
    if(this.prefix_changed) this.dashboard.guild.api.save_prefix(id, this.prefix);
    if(this.language_changed) this.dashboard.guild.api.save_language(id, this.language);
  }
}
