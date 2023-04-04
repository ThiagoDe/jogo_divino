import React, { useState } from 'react'
import './Modal.scss'
import { useSelector, useDispatch } from 'react-redux';
import { updateModal } from '../features/modal/modalSlice';


const Modal = () => {
    const [ firstTime, setFirstTime ] = useState(true)
    const modalOpened = useSelector((state) => state.modal.open)
    const currCard = useSelector((state) => state.currCard)
    console.log(currCard, 'here')
    const dispatch = useDispatch()

    const modalToggle = () => {
        setFirstTime(false)
        setTimeout(() => {
            dispatch(updateModal())
        }, 300)
    }

    const coverClass = modalOpened ? 'modal-cover modal-cover-active' : 'modal-cover' // mask background

    const containerClass = modalOpened ? 'modal-container modal-container-active' : firstTime ? 'modal-container' : 'modal-container-out'
    
    

    return (
      <>

        <div className={containerClass}>
            <div className='modal-header' style={{textAlign: "center"}}>
                <h1 style={{textAlign: "center"}}> {currCard.name} </h1>
            </div>
            <div className='modal-body' style={{textAlign: "center"}}>
                <div class="image"><img src={currCard.image} alt={currCard.name} /></div>
                
                <div className='text-content'>
                    <p>
                    STUDY MODE: Click on the slider on the top left of your screen to activate the study mode. Hover over each state to visualize its name and memorize it. When done, switch to the game mode
                    </p>
                    <br/> 
                    <p>
                    GAME MODE: You will be prompted a state name to find on the map. Click on the map where you believe the state to be located. If your guess is correct the state color will turn green and 1 pt will be counted towards your accurate score. Otherwise, it will turn red and 1 pt will be counted toward your inaccurate score. You have 10 seconds to locate each state and 10 states to locate.
                    </p> 
                </div>
            </div>
            <div className='modal-footer'></div>
        </div>
        
        <div className={coverClass} onClick={modalToggle}></div>
      </>
    )
  
}

export default Modal