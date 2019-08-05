const initialState = {
  receiver: 'world'
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GREET_REACT':
      ...state, // reducer will overright the complete state, what if there were more than one key-value pairs, all that would be over written by one thing(newly returned one). so we need to first copy all of them and later over write the update thing
      return Object.assign({}, state, {
        receiver: 'React JS'
      });
    case 'GREET_REDUX':
	...state,
      return Object.assign({}, state, {
        receiver: 'Redux'
      });
    case 'GREET_BOTH':
	...state,
      return Object.assign({}, state, {
        receiver: 'REACT AND REDUX'
      });

    default:
      return state;
  }
}

export default reducer;
