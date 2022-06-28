const INITIAL_STATE = {
  carts: []
};

export const cartreducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      return {
        ...state,
        carts: [...state.carts, action.payload]
      }
    case "REMOVE_CART":
      const data = state.carts.filter((element) => element.id !== action.payload);
      return {
        ...state,
        carts: data
      }
      
    default:
      return state;
  }
}