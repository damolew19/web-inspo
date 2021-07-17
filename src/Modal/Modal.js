import React, {useState} from 'react';
import { hot } from 'react-hot-loader/root';

import './Modal.scss'

const Modal = (props) => {

    const [input, setInput] = useState(['',''])

    const saveModal = (e) => {
        console.log(e.target.id)
        const modalInput = document.querySelectorAll('.modal input')
        //send input to the state
        let arr = [...input]
        modalInput.forEach((element, i) => {if(element.value !== '') {arr[i] = element.value}} )
        setInput(arr)

        //close the modal
        document.querySelectorAll('#site-modal, #category-modal').forEach(element => element.style.display = "none")

        // clear modal entries for next usage
       
       modalInput.forEach(element => element.value = '')


    }

    return (

        <section className="modal">
        <h3 className="modal__title">Add a site</h3>
        <form className="modal__form">
            <label>{props.firstInput}: 
                <input type="text" name={props.firstInput} />
            </label>
            <label>{props.secondInput}: 
                <input type="text" name={props.secon}/>
            </label>
            <button id="working" type="button" onClick={saveModal}>Save</button>
        </form>
    </section>
    )
}

export default Modal;