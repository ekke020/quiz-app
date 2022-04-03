// keeps track of which question it is

export const incrementCount = () => {
  return {
    type: 'INCREMENT',
  };
};

export const resetCount = () => {
  return {
    type: 'RESET',
  };
};

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const newState = ++state;
      return newState;
    case 'RESET':
      return 0;
    default:
      return state;
  }
};

export default countReducer;
