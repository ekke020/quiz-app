import { useSelector } from 'react-redux';
import styles from './css/app.module.css';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [colorState, setColorState] = useState(false);
  const state = useSelector((state) => state.gameState);

  return (
    <div className={colorState ? styles.darkmode : styles.lightmode}>
      <Header colorState={colorState} setColorState={setColorState} />
      <div className={styles.gameContainer}>{state}</div>
    </div>
  );
}

export default App;
