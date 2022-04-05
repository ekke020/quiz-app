const QuestionResult = ({ question }) => {
  return (
    <div>
      <p>{question.question}</p>
      <p>Your answer was {question.answeredCorrect.toString()}</p>
    </div>
  );
};

export default QuestionResult;
