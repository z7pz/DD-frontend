import { makeAutoObservable } from "mobx";
import State from "../State";

export class Dashboard {
    server: unknown;
    constructor(state: State) {
        makeAutoObservable(this);
    }
    setTest() {
     this.test = 'faset'   
    }
}