import React from 'react';
import { imagePath } from '../utils/helpers.js'
/*
function jamesModal(modalImgSrc,modalImgTitle,modalImgDescription){
  return(
    <>
      <div>{modalImgSrc}, {modalImgDescription}, {modalImgTitle} </div>
    </>
  )
}
*/
export default function illustration(){
    let heyMyPic = `${imagePath}` + '/illustration12.JPG';/*
    let jammy1 = 'hi this is jammy 1';
let jammy2 = 'hey thsi is jammy 2';
let jammy3 = 'this is jammy 3';*/
    return(
        <>{/*  <div>
        <jamesModal modalImgSrc = {jammy1} modalImgTitle = {jammy2} modalImgDescription = {jammy3} />
        <jamesModal modalImgSrc = {jammy1} modalImgTitle = {jammy2} modalImgDescription = {jammy3} />
        <jamesModal modalImgSrc = {jammy1} modalImgTitle = {jammy2} modalImgDescription = {jammy3} />
        <jamesModal modalImgSrc = {jammy1} modalImgTitle = {jammy2} modalImgDescription = {jammy3} />
        </div>*/}
            <div class="h1">This is the illustration route!!</div>
            {/*
            <img src = {heyMyPic} class = "img-fluid"/> 
    */}

<img alt = "" src = {heyMyPic} class = "img-fluid" data-bs-toggle="modal" data-bs-target="#exampleModal"/>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    
    <div class="modal-content">

      {/* below is the white box of the modal*/}
      <div class="modal-body ">
        <img alt = "" src = {heyMyPic} class = "h-100 w-100 flex-fill"/><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        <div class = "">
            <div  class ="py-2">
                <h3 class ="">Calico Envy</h3>
                <p>This is the cat that I would want to have if i had a cat because that would be really coolio man</p>
            </div>
            
        </div>
      </div>{/*This will be inside the white box*/}<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

    </div>{/*This will be outside the white box*/}<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
</div>


        </>
    )

}