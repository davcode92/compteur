import { INCREMENT, DECREMENT, TOGGLESHOW } from "./actionTypes";

const initState = {
  compteur: 0,
  isShow: true,
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return { ...state, compteur: state.compteur + 1 };

    case DECREMENT:
      return {...state,compteur: state.compteur - 1};

    case TOGGLESHOW:
      return {...state,isShow:!state.isShow};
    default:
      return state;
  }
};
export default reducer;
