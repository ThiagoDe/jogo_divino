// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './componets/Footer';
import GameBoard from './componets/GameBoard';
import Header from './componets/Header';
import Modal from './componets/modals/Modal';
import ModalPlay from './componets/modals/ModalPlay';
import ModalSpread from './componets/modals/ModalSpread';
import SpreadBoard from './componets/SpreadBoard';
import Book from './componets/modals/Book';

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
        {/* <Book/> */}
        <Footer/>
    </>
  );
}

export default App;
