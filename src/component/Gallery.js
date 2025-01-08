import React from 'react'
import { imagePath } from '../utils/helpers'
import '../assets/css/gallery.css'
import { images } from '../assets/JamesPictureObjects.js'
import JamesImageModals from './JamesImageModals.js'


export default function gallery(props) {
/*
    let data = [];

    for ( let i = 1; i < 14; i++) {
        data.push({
            id: `${i}`,
            imgSrc: `${imagePath}/illustration${i}.JPG`,
        })
    }

*/



    return(
        <>
        
            {/*<h1 style ={{textAlign: 'center'}}>Image Gallery</h1>*/}
            <div className = "base-gallery">
                {images.map((item, index)=>{
                    if(item.project === props.projectType){
                        return(
                                <div className = "pics" key = {index}>
                                <JamesImageModals description={item.description} imgUrl={item.imgUrl} title={item.title} project= {item.project}/>
                                </div>
                                )
                    }
                    else{
                        //return(<p>error with {item.title} the project type entered is {props.projectType}</p>)
                    }
            }
            )
            }
            </div>
        </>
    )
}
/*
return(
    <>
        {/*<h1 style ={{textAlign: 'center'}}>Image Gallery</h1>
}
        <div className = "base-gallery">
            {data.map((item, index)=>{
                return(
                    <div className = "pics" key = {index}>
                        <img alt="" src = {item.imgSrc} style = {{width: '100%'}}/>
                    </div>
        )
        }
        )
        }
        </div>
    </>
)
}*/