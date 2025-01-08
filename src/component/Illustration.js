import React from 'react';
import { imagePath } from '../utils/helpers.js';
import Example from '../component/Example.js';
import JamesImageModals from '../component/JamesImageModals.js';
import Gallery from '../component/Gallery.js'

function jamesModal(modalImgSrc,modalImgTitle,modalImgDescription){
  return(
    <>
      <JamesImageModals imgUrl = {modalImgSrc} description = {modalImgDescription} title = {modalImgTitle} />
    </>
  )
}

function imgPathMaker(imgFileName){
  let imageWithPathName = `${imagePath}` +'/'+ `${imgFileName}`;
  return(imageWithPathName);

}

export default function illustration(){
  let x ='polaroid1spring.JPG';
    return(
        <> 
          <Gallery projectType = "Illustration" />
        </>
    )

}