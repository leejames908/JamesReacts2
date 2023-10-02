import React from 'react'
import { imagePath } from '../utils/helpers'
import '../assets/css/gallery.css'



export default function gallery() {

    let data = [];

    for ( let i = 1; i < 14; i++) {
        data.push({
            id: `${i}`,
            imgSrc: `${imagePath}/illustration${i}.JPG`,
        })
    }


    return(
        <>
            {/*<h1 style ={{textAlign: 'center'}}>Image Gallery</h1>
*/}
            <div className = "base-gallery">
                {data.map((item, index)=>{
                    return(
                        <div className = "pics" key = {index}>
                            <img src = {item.imgSrc} style = {{width: '100%'}}/>
                        </div>
            )
            })}
            </div>
        </>
    )
}