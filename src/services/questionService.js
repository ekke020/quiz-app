import axios from 'axios';
const baseurl = 'https://opentdb.com/api.php';

const shuffle = (arr) => {
  return arr.sort(() => Math.random() - 0.5);
};
const createQuestionObject = (result) => {
  return {
    category: result.category,
    correctAnswer: result.correct_answer,
    alternatives: shuffle([...result.incorrect_answers, result.correct_answer]),
    question: result.question,
  };
};

export const getData = async (data) => {
  const quizobject = await axios.get(baseurl, { params: data });
  return quizobject.data.results.map((result) => createQuestionObject(result));
};
