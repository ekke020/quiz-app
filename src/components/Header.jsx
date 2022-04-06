import { useDispatch } from 'react-redux';
import { setGameState } from '../reducers/gameStateReducer';
import styles from '../css/app.module.css';
import { resetCount } from '../reducers/countReducer';

const Header = ({ colorState, setColorState }) => {
  const dispatch = useDispatch();

  const restartGame = (event) => {
    event.preventDefault();
    dispatch(setGameState('START_SCREEN'));
    dispatch(resetCount());
  };

  const toggleTheme = (event) => {
    event.preventDefault();
    setColorState(!colorState);
  };

  return (
    <div>
      <ul className={styles.gameSettings}>
        <li>
          <button className={styles.headerButton} onClick={restartGame}>
            Restart Game
          </button>
        </li>
        <li>
          <button className={styles.headerButton} onClick={toggleTheme}>
            {colorState ? 'Lightmode' : 'Darkmode'}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
