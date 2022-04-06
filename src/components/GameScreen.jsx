import Question from './Question';
import { useSelector } from 'react-redux';
import { setGameState } from '../reducers/gameStateReducer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import styles from '../css/startScreen.module.css';

const GameScreen = () => {
  const count = useSelector((state) => state.count);
  const questions = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  useEffect(() => {
    count === questions.length && dispatch(setGameState('RESULT_SCREEN'));
  }, [count]);

  return (
    <div>
      {count < questions.length && <Question question={questions[count]} />}
    </div>
  );
};

export default GameScreen;
