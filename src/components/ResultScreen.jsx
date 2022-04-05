import { useSelector } from 'react-redux';
import QuestionResult from './QuestionResult';

const ResultScreen = () => {
  const questions = useSelector((state) => state.questions);
  const score = questions.filter((q) => q.answeredCorrect).length;

  return (
    <div>
      <h1>Results</h1>
      <p>
        {score} / {questions.length}
      </p>
      {questions.map((q, i) => (
        <QuestionResult key={i} question={q} />
      ))}
    </div>
  );
};

export default ResultScreen;
