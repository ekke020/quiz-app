import { incrementCount } from '../reducers/countReducer';
import { answerQuestion } from '../reducers/questionsReducer';
import { useDispatch } from 'react-redux';
import styles from '../css/gameScreen.module.css';

const Question = (props) => {
  const { category, question, alternatives, correctAnswer, id } =
    props.question;
  const dispatch = useDispatch();
  const buttonClicked = (event) => {
    event.preventDefault();
    dispatch(answerQuestion(event.target.value === correctAnswer, id));
    dispatch(incrementCount());
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.categoryContainer}>{category}</h2>
      <p className={styles.pContainer}>{question}</p>
      <div className={styles.questionContainer}>
        {alternatives.map((alternative, index) => (
          <button
            className={styles.buttonContainer}
            onClick={buttonClicked}
            key={index}
            value={alternative}
          >
            {alternative}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
