import './ModalSpread.scss'
import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

const ModalSpread = () => {

    const [open, setOpen] = useState(false);
    const gameOn = useSelector(state => state.game.gameOn)
    const usingBoard = useSelector(state => state.game.usingBoard)

    const checkIsOpen = () => {
        if (usingBoard) { 
            setOpen(false)
        } else {
            setOpen(true)
        }
    }

    // useEffect(() => {
    //     checkIsOpen()
    // },[usingBoard])
 

    const content = (
        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
            <h2>Escolha uma carta</h2>
        </div>
    )
    return content
}

export default ModalSpread 