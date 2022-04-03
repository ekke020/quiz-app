const deCodeHtml = require('he');

const shuffle = (arr) => {
  return arr.sort(() => Math.random() - 0.5);
};
const createQuestionObject = (result) => {
  return {
    category: deCodeHtml.decode(result.category),
    correctAnswer: deCodeHtml.decode(result.correct_answer),
    alternatives: shuffle([
      ...result.incorrect_answers.map((a) => deCodeHtml.decode(a)),
      deCodeHtml.decode(result.correct_answer),
    ]),
    question: deCodeHtml.decode(result.question),
    answeredCorrect: false,
  };
};

export const setQuestions = (questions) => {
  return {
    type: 'NEW_QUESTIONS',
    questions: questions.map((q) => createQuestionObject(q)),
  };
};

const questionsReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_QUESTIONS':
      return [...action.questions];

    // case 'USER_ANSWER':

    default:
      return state;
  }
};

export default questionsReducer;
