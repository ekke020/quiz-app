import styles from '../css/startScreen.module.css';
import { categories, type, difficulties } from '../userInputData';
import Select from './Select';
import { getData } from '../services/questionService';
import { useDispatch, useSelector } from 'react-redux';
import { setQuestions } from '../reducers/questionsReducer';
import { setGameState } from '../reducers/gameStateReducer';
import { setMsg } from '../reducers/msgReducer';

const StartScreen = () => {
  const dispatch = useDispatch();
  let msg = useSelector((state) => state.msg);

  const startGame = (data) => {
    dispatch(setQuestions(data));
    dispatch(setMsg('START_MSG'));
    dispatch(setGameState('GAME_SCREEN'));
  };

  const getNewUserInput = () => {
    dispatch(setMsg('ERROR_MSG'));
    dispatch(setGameState('START_SCREEN'));
  };

  const click = async (event) => {
    event.preventDefault();
    const input = { amount: '', category: '', difficulty: '', type: '' };
    Object.keys(input).forEach((key, index) => {
      input[key] = event.target[index].value;
    });
    dispatch(setGameState('LOADING_SCREEN'));
    const data = await getData(input);
    data.length !== 0 ? startGame(data) : getNewUserInput();
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
