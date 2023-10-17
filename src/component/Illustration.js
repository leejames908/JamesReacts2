import React from 'react';
import { imagePath } from '../utils/helpers.js'
import { Button } from 'bootstrap';
import { Modal } from 'react-bootstrap';


export default function illustration(){
    let heyMyPic = `${imagePath}` + '/illustration12.JPG';
    return(
        <>
            <div class="h1">This is the illustration route!!</div>
            {/*
            <img src = {heyMyPic} class = "img-fluid"/> 
    */}

<img src = {heyMyPic} class = "img-fluid" data-bs-toggle="modal" data-bs-target="#exampleModal"/>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-body d-flex flex-row">
        <img src = {heyMyPic} class = "h-75 w-75 flex-fill"/>
        <div class = "p-2 d-flex flex-row justify-content-between">
            <div  class ="p-2">
                <h3 class ="">Calico Envy</h3>
                <p>This is the cat that I would want to have if i had a cat because that would be really coolio man</p>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )

}