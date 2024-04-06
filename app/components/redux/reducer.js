import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants";

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [
        ...state,
        action.data
      ];
    // case REMOVE_FROM_CART:
    //   let result = state.filter(item=>{
    //     return item.name!=action.data
    //   })
    //   return [...result]
    case REMOVE_FROM_CART:
      const index = state.findIndex(item => item.name === action.data);
      if (index !== -1) {
        const updatedState = [...state];
        updatedState.splice(index, 1); // Remove one unit of the item
        return updatedState;
      }
      return state;
    default:
      return state;
  }
}