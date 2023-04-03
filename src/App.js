// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import GameBoard from './componets/GameBoard';
import Header from './componets/Header';
import Modal from './componets/Modal';
import SpreadBoard from './componets/SpreadBoard';

const App = () => {

  return (
    <div className="App">
      <Header/>
      <GameBoard />
      <SpreadBoard />
      <Modal/>
    </div>
  );
}

export default App;
