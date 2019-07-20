const initialState = {
  receiver: 'world'
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GREET_REACT':
      console.log('From Reducer: ', action.PAYLOAD.tech);
      return Object.assign({}, state, {
        receiver: 'React JS'
      });
    case 'GREET_REDUX':
      return Object.assign({}, state, {
        receiver: 'Redux'
      });
    case 'GREET_BOTH':
      return Object.assign({}, state, {
        receiver: 'REACT AND REDUX'
      });

    default:
      return state;
  }
}

export default reducer;
