import React from "react"
import Button from "react-bootstrap/Button"
import 'bootstrap/dist/css/bootstrap.min.css'
import ProjectGallery from './FilteredGallery.js'

export default function about() {
    return (
        <div>
            <p>THE ABOUT PAGE IN ROUTES</p>
            <Button variant="primary" size="lg">Thiso react-bootstrap!!!!</Button>{' '}
            <h1>HIHIHI</h1>
            <ProjectGallery project = "Illustration"/>
        </div>
    )
}

