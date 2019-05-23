const defaultState = {
  data: null,
  error: null,
  fetching: true,
}

const feeds = (state = defaultState, action) => {
  switch (action.type) {
    case 'USER_FETCH_REQUESTED':
      return {
        ...state,
        fetching: true,
      };
    case 'USER_FETCH_SUCCEEDED':
      return {
        ...state,
        fetching: false,
        data: action.response,
      };
    case 'USER_FETCH_FAILED':
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default feeds;
