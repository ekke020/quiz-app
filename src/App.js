import { useSelector } from 'react-redux';
import styles from './css/app.module.css';

function App() {
  const state = useSelector((state) => state.gameState);

  return <div className={styles.gameContainer}>{state}</div>;
}

export default App;
