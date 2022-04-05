import { useSelector } from 'react-redux';
import styles from './css/app.module.css';

function App() {
  const state = useSelector((state) => state.gameState);

  return (
    <div>
      <div className={styles.gameContainer}>{state}</div>
    </div>
  );
}

export default App;
