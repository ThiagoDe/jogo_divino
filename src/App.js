// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import GameBoard from './componets/GameBoard';
import Header from './componets/Header';
import SpreadBoard from './componets/SpreadBoard';

const App = () => {
  // const [ cardSize, setCardSize ] = useState(0)

  // // useEffect(() => {},[])
  // const CallBack = (data) => {
  //   setCardSize(data)
  // }

  return (
    <div className="App">
      <Header/>
      <GameBoard />
      <SpreadBoard />
    </div>
  );
}

export default App;
