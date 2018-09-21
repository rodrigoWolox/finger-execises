import { actionTypes } from "./actions";

const initialState = { calculatorValue: 0 };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD:
      return { ...state, calculatorValue: state.calculatorValue + 1 };
    case actionTypes.SUBSTRACT:
      return { ...state, calculatorValue: state.calculatorValue - 1 };
    default:
      return state;
  }
}
