// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Footer from './componets/Footer';
import GameBoard from './componets/GameBoard';
import Header from './componets/Header';
import Modal from './componets/Modal';
import ModalPlay from './componets/modalPlay/ModalPlay';
import ModalSpread from './componets/modalPlay/ModalSpread';
import SpreadBoard from './componets/SpreadBoard';

const App = () => {
  // game logic
  // modal 

  return (
    <>
      <div className="App">
        <ModalPlay/>
        <Header/>
        <GameBoard />
        <SpreadBoard />
        <ModalSpread/>
        <Modal/>
      </div>
        <Footer/>
    </>
  );
}

export default App;
