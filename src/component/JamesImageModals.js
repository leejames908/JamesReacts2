import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import React from 'react';
import { images } from '../assets/JamesPictureObjects';

export default function JamesImageModals(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
			<a onClick = {handleShow}>
				<img alt = {props.description} src = {props.imgUrl} style = {{width: '100%'}}/>
			</a>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>/*@@@@@ I need to put the image in the modal*/{props.description}{props.project}</Modal.Body>
        <Modal.Footer closeButton>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}