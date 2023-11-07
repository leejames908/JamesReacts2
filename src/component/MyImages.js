import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/style.css'
import { imagePath } from '../utils/helpers.js'
export default function myImages() {

    const teamAquaBase = {
        title: 'Team Aqua Base',
        project: 'Illustration',
        indexNumber: 1,
        description: "Reimagination of Team Aqua's base for the anthology: Wings of Hoenn.",
        myImagePath: `${imagePath}/illustration1.JPG`
    }
    return(
        <>
            <div class="h2">{teamAquaBase.title}</div>
            <div>{teamAquaBase.description}</div>
            <div>{teamAquaBase.myImagePath}</div>
            <img alt="team aqua's base" class="unga img-fluid" src={teamAquaBase.myImagePath}/>
            <img alt="team aqua's base" class="unga" src={teamAquaBase.myImagePath}/>
            <img alt="team aqua's base" class="unga" src={teamAquaBase.myImagePath}/>
        </>

    )


}