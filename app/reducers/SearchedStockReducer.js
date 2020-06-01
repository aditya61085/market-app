export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_SYMBOL":
      console.log('In UPDATE_SYMBOL: state, action:', state, action);
      return {
        ...state, ...action.newSymbol
      };
    default:
      return state;
  }
};