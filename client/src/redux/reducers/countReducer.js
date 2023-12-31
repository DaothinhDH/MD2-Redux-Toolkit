const initialState = 0;
import { ACT_INCREASE,ACT_DECREASE } from "./../constrains/index";

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
      case ACT_INCREASE:
          return (state + 1);
      case ACT_DECREASE:
          return (state -1);

    default:
      return state;
  }
};
