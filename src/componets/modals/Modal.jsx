import React, { useState } from 'react'
import './Modal.scss'
import { useSelector, useDispatch } from 'react-redux';
import { updateModal } from '../../features/modal/modalSlice';
import { updateUsingBoard, switchToBoard } from '../../features/game/gameSlice';
import Book from './Book';


const Modal = () => {
    const [ firstTime, setFirstTime ] = useState(true)
    const modalOpened = useSelector((state) => state.modal.open)
    const currCard = useSelector((state) => state.currCard)
    const dispatch = useDispatch()

    const modalToggle = () => {
        //switch attention to spread board
        dispatch(switchToBoard())

        setFirstTime(false)
        // close modal global state
        setTimeout(() => {
            dispatch(updateModal())
        }, 300)
    }

    const coverClass = modalOpened ? 'modal-cover modal-cover-active' : 'modal-cover' // mask background
    const containerClass = modalOpened ? 'modal-container modal-container-active' : firstTime ? 'modal-container' : 'modal-container-out'

    return (
      <>

        <div className={containerClass}>
            
            <Book/>
         
        </div>
        
        <div className={coverClass} onClick={modalToggle}></div>
      </>
    )
  
}

export default Modal