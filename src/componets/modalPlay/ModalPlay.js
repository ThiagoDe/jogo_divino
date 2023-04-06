import React, { useState } from 'react'
import './ModalPlay.scss'
import { useSelector, useDispatch } from 'react-redux';
// import { updateModal } from '../features/modal/modalSlice';
import { updateGame, updateSubject, updateUsingBoard } from '../../features/game/gameSlice';


const ModalPlay = ({play}) => {
    const [ firstTime, setFirstTime ] = useState(true)
    const [modalOpened, setModalOpen] = useState(true)
    const [theme, setTheme] = useState("");
    const gameOn = useSelector(state => state.game.gameOn)
    const subject = useSelector(state => state.game.subject)
    // console.log(gameOn, 'here')
    // console.log(subject, 'subject')

    const dispatch = useDispatch()

    const modalToggle = () => {
        setFirstTime(false)
        setModalOpen(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted theme:", theme);

        dispatch(updateSubject(theme))
        dispatch(updateGame())
        dispatch(updateUsingBoard())
        setModalOpen(false)
    };

    const handleThemeChange = (event) => {
        setTheme(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            handleSubmit(event);
        }
    };

    const coverClass = modalOpened ? 'playModal-cover playModal-cover-active' : 'playModal-cover' // mask background
    const containerClass = modalOpened ? 'playModal-container playModal-container-active' : firstTime ? 'playModal-container' : 'playModal-container-out'
    

    return (
      <>

        <div className={containerClass}>
            <div className='playModal-header' style={{textAlign: "center"}}>
                <h1>
                    Qual tema você quer trabalhar?
                </h1>
            </div>

            <div
                className="form"
                style={{display: "flex", flexDirection: "column", alignItems: "center"}}
                >
                <input
                    onKeyDown={handleKeyDown}
                    onChange={handleThemeChange}
                    type="text"
                    className="form__input"
                    placeholder="Exemplo : Meu relacionamento com o dinheiro"
                    id="input"
                />
            
            </div>
            <div>
                <button id="submit_btn" onClick={handleSubmit}>
                    <div className="btn btn__primary"><p>JOGAR</p></div>
                </button>
            </div>
           
        </div>
        
        <div className={coverClass} onClick={modalToggle}></div>
      </>
    )
  
}

export default ModalPlay