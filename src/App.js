import Welcome from './components/Welcome';
import { useState } from 'react';
import GameScreen from './components/GameScreen';

function App() {
  const [data, setData] = useState(null);
  console.log(data);
  return (
    <div>
      {data ? <GameScreen data={data} /> : <Welcome setData={setData} />}
    </div>
  );
}

export default App;
