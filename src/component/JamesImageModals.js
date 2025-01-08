import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import React from 'react';
import { images } from '../assets/JamesPictureObjects';
import { imagePath } from '../utils/helpers.js';
import Stack from 'react-bootstrap/Stack';

export default function JamesImageModals(props) {

  //variables are:   description   imgUrl   title    

  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
  const [fullscreen, setFullscreen] = useState(true);
  let modalStyling = {
      height: "80vh",
      width: "auto",
      margin: "auto"

  };
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
			<a onClick = {handleShow}>
				<img alt = {props.description} src = {`${props.imgUrl}`} style = {{width: '100%'}} />
			</a>
      <Modal show={show} fullscreen={fullscreen} onHide={handleClose}>
        <Modal.Body>
            <Stack>
            <div class = "james-modal-alignment">
              <Modal.Title class = "h2 james-modal-text jam-heading">{props.title}</Modal.Title>
              <img class = "james-modal-alignment" alt = {props.description} src = {`${props.imgUrl}`} style ={modalStyling}/>
              <Stack direction = "horizontal" gap = {1}>
                <div class = "h4 james-modal-text jam-text">{props.project}</div>
                <div class = "james-modal-text">{props.description}</div>
                
              </Stack>
            </div>
            </Stack>
        </Modal.Body>
        <Modal.Footer closeButton>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}