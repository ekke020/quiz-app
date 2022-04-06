import styles from '../css/startScreen.module.css';
import { categories, type, difficulties } from '../userInputData';
import Select from './Select';
import { getData } from '../services/questionService';
import { useDispatch } from 'react-redux';
import { setQuestions } from '../reducers/questionsReducer';
import { setGameState } from '../reducers/gameStateReducer';
import { useEffect } from 'react';

let msg = "Please make some choices";
const StartScreen = () => {
  useEffect(() => {msg = "Please make some choices"}, []);
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
    if (data.length === 0) {
      msg = "Could not find any questions for given input";
      dispatch(setGameState('START_SCREEN'));
      return;
    }
    dispatch(setQuestions(data));
    dispatch(setGameState('GAME_SCREEN'));
  };

  return (
    <div className={styles.container}>
      <div>
        <h1>Welcome to our Quiz!</h1>
        <p>{msg}</p>
      </div>
      <form onSubmit={(e) => click(e)}>
        <div>
          <label>Amount of questions</label>
        </div>
        <input
          className={styles.inputNumber}
          type='number'
          min={1}
          defaultValue={10}
        ></input>
        <Select options={categories} name={'Category'} />
        <Select options={difficulties} name={'Difficulty'} />
        <Select options={type} name={'Game type'} />
        <input className={styles.formButton} type='submit' value='Start quiz' />
      </form>
    </div>
  );
};

export default StartScreen;
