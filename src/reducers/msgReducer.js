export const setMsg = (msg) => {
  return {
    type: msg,
  };
};

const msgReducer = (state = 'Please make some choices', action) => {
  switch (action.type) {
    case 'START_MSG':
      return 'Please make some choices';
    case 'ERROR_MSG':
      return 'Could not find any questions for given input';
    default:
      return state;
  }
};

export default msgReducer;
