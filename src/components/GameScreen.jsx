import { getData } from '../services/questionService';
import { useState, useEffect } from 'react';
import Question from './Question';

const GameScreen = ({ data }) => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Game</h1>
      {counter < data.length && <Question category={data[counter].category} />}
    </div>
  );
};

export default GameScreen;
