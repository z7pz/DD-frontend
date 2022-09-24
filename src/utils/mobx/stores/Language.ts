import { makeAutoObservable } from "mobx";
import { Layout } from "./Layout";

export class Language {
  value: string;
  _default: boolean;
  constructor(public layout: Layout) {
    makeAutoObservable(this);
  }
  // TODO: add default feature
  hydrate(language: string, _default = false) {
    this.value = language;
    this._default = _default;
  }
  toJSON() {
    return {
      language: this.value,
      _default: this._default,
    };
  }
}
