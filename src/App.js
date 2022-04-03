import Welcome from './components/Welcome';
import GameScreen from './components/GameScreen';
import { useSelector } from 'react-redux';
import ResultScreen from './components/ResultScreen';

function App() {
  const state = useSelector((state) => state.quiz);
  const stateSwitch = () => {
    switch (state) {
      case 0:
        return <Welcome />;
      case 1:
        return <GameScreen />;
      case 2:
        return <ResultScreen />;
      default:
        return;
    }
  };
  return <div>{stateSwitch()}</div>;
}

export default App;
