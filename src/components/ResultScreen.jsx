import { useSelector } from 'react-redux';
import QuestionResult from './QuestionResult';
import styles from '../css/scoreScreen.module.css';

const ResultScreen = () => {
  const questions = useSelector((state) => state.questions);
  const score = questions.filter((q) => q.answeredCorrect).length;

  return (
    <div>
      <div className={styles.titleContent}>
        <h1>Results</h1>
        <p className={styles.score}>
          {score} / {questions.length}
        </p>
      </div>
      {questions.map((q, i) => (
        <QuestionResult key={i} q={q} />
      ))}
    </div>
  );
};

export default ResultScreen;
