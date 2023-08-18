import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/style.css'

export default function navBar() {
    return (
        <div class="d-flex justify-content-start align-items-end">
            <img class="" id = 'main-icon-img' src ={'images/icon.jpg'} alt="Jams Icon"/>
            <div class="flex-column py-2">
                <p id="jam-main-title" class="m-0 b-0 h2 jam-heading">JAMES LEE ILLUSTRATION</p>
                <p class="m-0 b-0 h6 jam-heading">hello.jamesdl@gmail.com</p>
            </div>
        </div>
    )
}