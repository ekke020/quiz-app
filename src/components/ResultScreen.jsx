import { useSelector } from 'react-redux';
import QuestionResult from './QuestionResult';
import styles from '../css/scoreScreen.module.css';

const ResultScreen = () => {
  const questions = useSelector((state) => state.questions);
  const score = questions.filter((q) => q.answeredCorrect).length;

  const procent = Math.round((score/questions.length)*100);
  const procentColor = () => {
      switch (true) {
        case procent < 50: 
          return {color: "red"};
        case procent < 75: 
          return {color: "yellow"};
        default: 
          return {color: "green"};
      };
  }
  return (
    <div>
      <div className={styles.titleContent}>
        <h1>Results</h1>
        <p className={styles.score} style={procentColor()}>
          {procent} % 
        </p>
      </div>
      {questions.map((q, i) => (
        <QuestionResult key={i} q={q} />
      ))}
    </div>
  );
};

export default ResultScreen;
