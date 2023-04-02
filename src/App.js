// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import GameBoard from './componets/GameBoard';
import Header from './componets/Header';
import SpreadBoard from './componets/SpreadBoard';

function App() {
  const [ cardSize, setCardSize ] = useState(0)

  const CallBack = (data) => {
    setCardSize(data)
  }

  return (
    <div className="App">
      <Header/>
      <GameBoard handleCallback={CallBack}/>
      <SpreadBoard cardSize={cardSize}/>
    </div>
  );
}

export default App;
