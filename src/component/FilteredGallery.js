import React from 'react';
import '../assets/css/gallery.css';
import { images } from '../assets/JamesPictureObjects';
import JamesImageModals from './JamesImageModals';


/* Comments refer to what is directly below them unless otherwise specified */



export default function projectGallery(props){

/*Establishes the array where I can put the objects with the specified project*/

	const filteredGallery = [];
    const JamesPictureObjects = images;
    let projectType = props.project;

/*Loops through the array to see if the object in "JamesPictureObjects" has a 
matching project value (I may need to check if the datatype will cause conflict)*/

	for(let i = 0; i<JamesPictureObjects.length-1; i++){
		if(JamesPictureObjects[i].project === projectType){

/*Appends the Object in the current index to the "filteredGallery"*/

	     filteredGallery.push(JamesPictureObjects[i]);
	     
        }
    }
    
/* Now I have an array with all of the objects I need in "filteredGallery" */

    

	return(
	        <>
{/* This is the <div> component that contains the gallery */}
                <div className = "base-gallery">

	                {filteredGallery.map((item, index)=>{
	                    return(
	                        <div className = "pics" key = {index}>
	                            <JamesImageModals title = {item.title} description = {item.description} project = {item.project} imgUrl = {item.imgUrl}/>
	                        </div>
	            )
	            })}
	            </div>
	        </>
	    )
	
}
