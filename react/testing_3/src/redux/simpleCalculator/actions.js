export const actionTypes = {
  ADD: "ADD",
  SUBSTRACT: "SUBSTRACT"
};

export const simpleCalculatorActions = {
  add: () => ({ type: actionTypes.ADD }),
  substract: () => ({ type: actionTypes.SUBSTRACT })
};
export default simpleCalculatorActions;
