const defaultState = {
  clickCount: 0,
  newText: 'You look new here!!!',
}

const textState = (state = defaultState, action) => {
  switch (action.type) {
    case 'TEMP_CHANGE':
      const clickCount = state.clickCount + 1;
      return {
        clickCount,
        newText: `Hey you can change state now : Clicks : ${clickCount}`,
      };
    default:
      return state;
  }
};

export default textState;
