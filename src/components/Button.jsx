const Button = ({
  alternative,
  setRightAnswers,
  setCounter,
  amountOfRightAnswers,
  counter,
  correctAnswer,
}) => {
  const onClick = (event) => {
    event.preventDefault();
    let newCounter = ++counter;
    setCounter(newCounter);
    alternative === correctAnswer && amountOfRightAnswers++;
    let currCorrectAnswer = amountOfRightAnswers;
    setRightAnswers(currCorrectAnswer);
  };

  return (
    <div>
      <button
        onClick={(event) => {
          onClick(event);
        }}
        value={alternative}
      >
        {alternative}
      </button>
    </div>
  );
};

export default Button;
