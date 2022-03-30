import axios from 'axios';

const baseurl = 'https://opentdb.com/api.php';

const testUrl =
  'https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean';

export const getData = async () => {
  let quizobject = await axios.get(testUrl);

  console.log(quizobject);
};

export const getQuestions = async (inputDataObj) => {};
