import Welcome from '../components/StartScreen';
import GameScreen from '../components/GameScreen';
import ResultScreen from '../components/ResultScreen';
import LoadingScreen from '../components/LoadingScreen';

export const setGameState = (gameState) => {
  return {
    type: gameState,
  };
};

const gameStateReducer = (state = <Welcome />, action) => {
  switch (action.type) {
    case 'START_SCREEN':
      return <Welcome />;
    case 'GAME_SCREEN':
      return <GameScreen />;
    case 'RESULT_SCREEN':
      return <ResultScreen />;
    case 'LOADING_SCREEN':
      return <LoadingScreen />;
    default:
      return state;
  }
};

export default gameStateReducer;
