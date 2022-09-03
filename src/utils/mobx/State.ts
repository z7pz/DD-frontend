import { makeAutoObservable } from "mobx";
import { Auth, Dashboard } from "./stores";

export default class State {
  auth = new Auth();
  dashboard = new Dashboard(this);
  constructor() {
    makeAutoObservable(this);
  }
}
const state = new State();
export const useAppState = () => {
  return state;
};
