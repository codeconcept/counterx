import { State } from "./app.state";
import { Detail } from "../models/detail";

const initialState: State = {
  title: 'Nombre de personnes présentes',
  count: 0,
  details: []
};

export function reducer(state = initialState, action) {
  console.log('in reducer', action);
  switch(action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + action.payload,
        details: [...state.details, <Detail>{ date: new Date(), buttonClicked: 'ajout'}]
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - action.payload,
        details: [...state.details, <Detail>{ date: new Date(), buttonClicked: 'retrait'}]
      }  
    default:
      return state;
  }
}