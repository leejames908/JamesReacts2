import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/style.css'
import { imagePath } from '../utils/helpers.js'
import { Link } from 'react-router-dom'
import MyImages from '../component/MyImages.js'

export default function navBar() {
    return (
        <>
        <div class="d-flex justify-content-between">
            <div class="d-flex justify-content-start align-items-end">
            <Link to = "/"><img class="" id = 'main-icon-img' src ={`${imagePath}/icon.jpg`} alt="Jams Icon"/></Link >
                <div class="flex-column py-2">
                    <p id="jam-main-title" class="m-0 b-0 h2 jam-heading">JAMES LEE ILLUSTRATION</p>
                    <p class="m-0 b-0 h6 jam-heading">hello.jamesdl@gmail.com</p>
                </div>
            </div>
            <div class="d-flex bounds-test align-items-end">
                <div class="d-flex">
                    <Link to = "illustration"><div class="px-2 nav-tab">ILLUSTRATION</div></Link>
                    <div class="px-2 nav-tab">PROJECTS</div>
                    <div class="px-2 nav-tab">ABOUT</div>
                </div>
            </div>
        </div>
        <MyImages class = "d-flex p-2"/>
        </>
    )
}