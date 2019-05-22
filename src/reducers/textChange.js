const newText = (state = { newText: {} }, action) => {
    switch (action.type) {
      case 'TEMP_CHANGE':
        return {
          newText: {
            text: 'Hey',
          }
        };
      default:
        return state;
    }
};

export default newText;
  