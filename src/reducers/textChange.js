const defaultState = {
  newText: 'You look new here!!!',
}

const newText = (state = defaultState, action) => {
  switch (action.type) {
    case 'TEMP_CHANGE':
      return {
        newText: 'Hey you can change state now',
      };
    default:
      return state;
  }
};

export default newText;
  