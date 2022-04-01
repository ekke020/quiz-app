import { getData } from '../services/questionService';

const GameScreen = ({ data }) => {
  getData(data);
  return (
    <div>
      <h1>Game</h1>
    </div>
  );
};

export default GameScreen;
