import styles from '../css/scoreScreen.module.css';
import { useState } from 'react';

const QuestionResult = ({ q }) => {
  const answerResult = () => (q.answeredCorrect ? 'correct' : 'incorrect');
  const [visible, isVisible] = useState(false);

  const extraInfo = () => (
    <>
      <p>Category: {q.category}</p>
      {!q.answeredCorrect && <p>Correct answer: {q.correctAnswer}</p>}
    </>
  );
  return (
    <div
      onClick={() => isVisible(!visible)}
      className={`${styles.question} ${q.answeredCorrect && styles.correct}`}
    >
      <p>{q.question}</p>
      <p>Your answer was {answerResult()}</p>
      {visible && extraInfo()}
    </div>
  );
};

export default QuestionResult;
