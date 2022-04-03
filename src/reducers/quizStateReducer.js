export const setGameState = (gameState) => {
  return {
    type: gameState,
  };
};

const quizStateReducer = (state = 0, action) => {
  switch (action.type) {
    case 'WELCOME_SCREEN':
      return 0;

    case 'GAME_SCREEN':
      return 1;

    case 'RESULT_SCREEN':
      return 2;

    default:
      return state;
  }
};

export default quizStateReducer;
