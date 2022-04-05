import { categories, type, difficulties } from '../userInputData';
import InputNumbers from './InputNumbers';
import Select from './Select';
import { getData } from '../services/questionService';
import { useDispatch } from 'react-redux';
import { setQuestions } from '../reducers/questionsReducer';
import { setGameState } from '../reducers/gameStateReducer';

const Welcome = () => {
  const dispatch = useDispatch();
  const click = async (event) => {
    event.preventDefault();
    const inputData = {
      amount: event.target[0].value,
      category: event.target[1].value,
      difficulty: event.target[2].value,
      type: event.target[3].value,
    };
    dispatch(setGameState('LOADING_SCREEN'));
    const data = await getData(inputData);
    dispatch(setQuestions(data));
    dispatch(setGameState('GAME_SCREEN'));
  };

  return (
    <div>
      <h1>Welcome to our Quiz!</h1>
      <p>Please make some choices!</p>
      <form onSubmit={(e) => click(e)}>
        <InputNumbers />
        <Select options={categories} name={'Category'} />
        <Select options={difficulties} name={'Difficulty'} />
        <Select options={type} name={'Game type'} />
        <input type='submit' value='Start quiz' />
      </form>
    </div>
  );
};

export default Welcome;
