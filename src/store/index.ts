import { makeAutoObservable } from 'mobx'

export class InitStore {
   testField = 1

   changeTestField = (value: number): void => {
       this.testField = value
   }

    constructor() {
        makeAutoObservable(this)
    }
}