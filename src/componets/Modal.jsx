import React, { useState } from 'react'
import './Modal.scss'


const Modal = () => {
    
    const [modalOpened, setModalOpen] = useState(false)

    const modalToggle = () => {
        setModalOpen((v) => !v)
    }


    const coverClass = modalOpened ? 'modal-cover modal-cover-active' : 'modal-cover'
    const containerClass = modalOpened ? 'modal-container modal-container-active' : 'modal-container'
    return (
      <>
        {/* <button className='btn btn-primary' onClick={this.modalToggle}>Modal</button> */}
        <div  onClick={modalToggle}>How it works</div> 

        <div className={containerClass}>
            <div className='modal-header' style={{textAlign: "center"}}>
                <h1 style={{textAlign: "center"}}> How it Works </h1>
            </div>
            <div className='modal-body' style={{textAlign: "start"}}>
                <br/>
                <p>
                    STUDY MODE: Click on the slider on the top left of your screen to activate the study mode. Hover over each state to visualize its name and memorize it. When done, switch to the game mode
                </p> 
                <br/>
                <p>
                GAME MODE: You will be prompted a state name to find on the map. Click on the map where you believe the state to be located. If your guess is correct the state color will turn green and 1 pt will be counted towards your accurate score. Otherwise, it will turn red and 1 pt will be counted toward your inaccurate score. You have 10 seconds to locate each state and 10 states to locate.
                </p>
            </div>
            <div className='modal-footer'></div>
        </div>
        
        <div className={coverClass} onClick={modalToggle}></div>
      </>
    )
  
}

export default Modal