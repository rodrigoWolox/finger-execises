export const actions = {
  ADD: "ADD",
  SUBSTRACT: "SUBSTRACT"
};

const actionCreators = {
  add: () => ({ type: actions.ADD }),
  substract: () => ({ type: actions.SUBSTRACT })
};

export default actionCreators;
