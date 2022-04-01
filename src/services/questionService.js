import axios from 'axios';

const baseurl = 'https://opentdb.com/api.php';

const testUrl =
  'https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean';

const checkData = () => {};

export const getData = async (data) => {


  let quizobject = await axios.get(baseurl, { params: data });

  console.log(quizobject);
};

export const getQuestions = async (inputDataObj) => {};
