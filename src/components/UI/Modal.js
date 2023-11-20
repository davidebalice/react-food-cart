import React from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'
import './Modal.module.css';


const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}/>
}

const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
}

const portalElememt = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,portalElememt)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElememt)}
    </>
  )
}

export default Modal