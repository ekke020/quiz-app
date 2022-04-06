import axios from 'axios';

const baseurl = 'https://opentdb.com/api.php';

export const getData = async (data) => {
  const quizObject = await axios.get(baseurl, { params: data });
  return quizObject.data.results;
};
