import { EDITING, SELECTED } from "./types";

export const useReducer = (state = {datacame: false}, action) => {
  switch (action.type) {
    case EDITING:
      return { ...state, datacame: action.payload };
    case SELECTED:
      return { ...state, select: action.payload };
    default:
      return state;
  }
};
