import { Action } from "@ngrx/store";

export enum CounterActionTypes {
  Increment = '[Counter] Increment',
  Decrement = '[Counter] Decrement'
}

export class IncrementCounter implements Action {
  type = CounterActionTypes.Increment;

  constructor(public payload: number) {}
}

export class DecrementCounter implements Action {
  type = CounterActionTypes.Decrement;

  constructor(public payload: number) {}
}
