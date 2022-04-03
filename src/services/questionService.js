import axios from 'axios';

const baseurl = 'https://opentdb.com/api.php';

export const getData = async (data) => {
  const quizobject = await axios.get(baseurl, { params: data });
  return quizobject.data.results;
};
