import Welcome from './components/Welcome';
import { getData } from './services/questionService';
import { useState } from 'react';
import GameScreen from './components/GameScreen';

function App() {
  const [data, setData] = useState(null);
  console.log('log');
  return (
    <div>
      {data ? <GameScreen data={data} /> : <Welcome setData={setData} />}
    </div>
  );
}

export default App;
