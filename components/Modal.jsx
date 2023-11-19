import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'


const Modal = ({va}) => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };
  return (
    <div className='Modal-wrapper'>
      <button onClick={showModal}>Show</button>
      <div className={`Modal_opacity ${show ? 'show' : ''}`} onClick={hideModal} >
        <div className={`Modal ${show ? 'show' : ''}`} onClick={(e) => e.stopPropagation()}>
          <p onClick={hideModal}><RxCross1 /></p>
          <div>
            {va}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal