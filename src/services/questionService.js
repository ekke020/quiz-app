import axios from 'axios';

const deCodeHtml = require('he');

const baseurl = 'https://opentdb.com/api.php';

const shuffle = (arr) => {
  return arr.sort(() => Math.random() - 0.5);
};
const createQuestionObject = (result) => {
  return {
    category: deCodeHtml.decode(result.category),
    correctAnswer: deCodeHtml.decode(result.correct_answer),
    alternatives: shuffle([
      deCodeHtml.decode(...result.incorrect_answers),
      deCodeHtml.decode(result.correct_answer),
    ]),
    question: deCodeHtml.decode(result.question),
  };
};

export const getData = async (data) => {
  const quizobject = await axios.get(baseurl, { params: data });
  return quizobject.data.results.map((result) => createQuestionObject(result));
};
