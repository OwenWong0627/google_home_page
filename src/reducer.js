// These all could just be in the StateProvider file, but I separated it to keep it organized, so that here is the reducer and initialState
// the initial term that is null, the the search button is pressed, the term will be updated to the value in the input bar
export const initialState = {
   term: null,
};

export const actionTypes = {
   set_and_save_search_term: "set_and_save_search_term",
};

// the reducer, "(state, action) => newState"
// If the action is 'actionTypes.set_and_save_search_term', modify the state.
const reducer = (state, action) => {
   console.log(state);
   console.log(action);

   switch (action.type) {
      // set the search
      case actionTypes.set_and_save_search_term:
         return {
            ...state,
            term: action.term
         };

      default:
         return state;
   }
};

export default reducer;