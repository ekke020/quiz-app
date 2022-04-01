import Button from './Button';

const Question = ({
  category,
  question,
  alternatives,
  correctAnswer,
  setRightAnswers,
  setCounter,
  amountOfRightAnswers,
  counter,
}) => {
  return (
    <div>
      <h2>{category}</h2>
      <p>{question}</p>
      {alternatives.map((alternative, index) => (
        <Button
          key={index}
          alternative={alternative}
          setRightAnswers={setRightAnswers}
          setCounter={setCounter}
          amountOfRightAnswers={amountOfRightAnswers}
          counter={counter}
          correctAnswer={correctAnswer}
        />
      ))}
    </div>
  );
};

export default Question;
