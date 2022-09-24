import { makeAutoObservable } from "mobx";
import { Layout } from "./Layout";

export class Prefix {
  value: string;
  _default: boolean;
  constructor(public layout: Layout) {
    makeAutoObservable(this);
  }
  // TODO: add default feature
  hydrate(prefix: string, _default = false) {
    this.value = prefix;
    this._default = _default;
  }
  toJSON() {
    return {
      prefix: this.value,
      _default: this._default,
    };
  }
}
