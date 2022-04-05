const deCodeHtml = require('he');

const shuffle = (arr) => {
  return arr.sort(() => Math.random() - 0.5);
};
const createQuestionObject = (result, index) => {
  return {
    category: deCodeHtml.decode(result.category),
    correctAnswer: deCodeHtml.decode(result.correct_answer),
    alternatives: shuffle([
      ...result.incorrect_answers.map((a) => deCodeHtml.decode(a)),
      deCodeHtml.decode(result.correct_answer),
    ]),
    question: deCodeHtml.decode(result.question),
    answeredCorrect: false,
    id: index,
  };
};

export const setQuestions = (questions) => {
  return {
    type: 'NEW_QUESTIONS',
    questions: questions.map((q, i) => createQuestionObject(q, i)),
  };
};

export const answerQuestion = (isAnswer, questionId) => {
  return {
    type: 'USER_ANSWER',
    isAnswer: isAnswer,
    questionId: questionId,
  };
};

const questionsReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_QUESTIONS':
      return [...action.questions];

    case 'USER_ANSWER':
      let question = state[action.questionId];

      question = {
        ...question,
        answeredCorrect: action.isAnswer,
      };
      return state.map((q) => (q.id === question.id ? question : q));
    default:
      return state;
  }
};

export default questionsReducer;
