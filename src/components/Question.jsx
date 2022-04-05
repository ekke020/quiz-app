import { incrementCount } from '../reducers/countReducer';
import { answerQuestion } from '../reducers/questionsReducer';
import { useDispatch } from 'react-redux';

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
    <div>
      <h2>{category}</h2>
      <p>{question}</p>
      {alternatives.map((alternative, index) => (
        <button onClick={buttonClicked} key={index} value={alternative}>
          {alternative}
        </button>
      ))}
    </div>
  );
};

export default Question;
