import { useSelector } from 'react-redux';

function App() {
  const state = useSelector((state) => state.gameState);
  
  return <div>{state}</div>;
}

export default App;
