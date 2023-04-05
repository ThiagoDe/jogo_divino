import './ModalSpread.scss'
import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

const ModalLeft = () => {

    const [open, setOpen] = useState(false);
 

    // useEffect(() => {
        
    //         setOpen(false)

    // }, [gameOn, roundComplete])



    const content = (
        <div className={`dropdown-menu ${!open? 'active' : 'inactive'}`} >
            <h2>Escolha uma carta</h2>
        </div>
    )
    return content
}

export default ModalLeft 