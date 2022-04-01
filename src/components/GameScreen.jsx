import { getData } from '../services/questionService';
import { useState, useEffect } from 'react';
import Question from './Question';

const GameScreen = ({ data }) => {
  const [counter, setCounter] = useState(0);
  const [amountOfRightAnswers, setRightAnswers] = useState(0);

  console.log('Score' + amountOfRightAnswers);
  console.log('Clicks' + counter);

  return (
    <div>
      <h1>Quiz Game</h1>
      {counter < data.length && (
        <Question
          category={data[counter].category}
          question={data[counter].question}
          alternatives={data[counter].alternatives}
          correctAnswer={data[counter].correctAnswer}
          setCounter={setCounter}
          setRightAnswers={setRightAnswers}
          amountOfRightAnswers={amountOfRightAnswers}
          counter={counter}
        />
      )}
    </div>
  );
};

export default GameScreen;
