import Welcome from '../components/Welcome';
import GameScreen from '../components/GameScreen';
import { useSelector } from 'react-redux';
import ResultScreen from '../components/ResultScreen';

export const setGameState = (gameState) => {
  return {
    type: gameState,
  };
};

const gameStateReducer = (state = <Welcome />, action) => {
  switch (action.type) {
    case 'WELCOME_SCREEN':
      return <Welcome />;

    case 'GAME_SCREEN':
      return <GameScreen />;

    case 'RESULT_SCREEN':
      return <ResultScreen />;

    default:
      return state;
  }
};

export default gameStateReducer;

