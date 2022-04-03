
import Question from './Question';
import { useSelector } from 'react-redux';

const GameScreen = () => {
 
  const count = useSelector(state => state.count);
  const questions = useSelector(state => state.questions)

  return (
    <div>
      <h1>Quiz Game</h1>
      {count < questions.length && (
        <Question
          category={questions[count].category}
          question={questions[count].question}
          alternatives={questions[count].alternatives}
          correctAnswer={questions[count].correctAnswer}
        />
      )}
    </div>
  );
};

export default GameScreen;
