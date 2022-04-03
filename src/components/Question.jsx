import { incrementCount } from "../reducers/countReducer";
import { useDispatch } from "react-redux";

const Question = ({
  category,
  question,
  alternatives,
  correctAnswer
}) => {
  const dispatch = useDispatch();
  const buttonClicked = (event) => {
    event.preventDefault();
    dispatch(incrementCount());
  }
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
