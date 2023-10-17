import React from 'react'
import NavBar from './NavBar.js'
import { Outlet } from 'react-router'

export default function root(){
    return(
        <>
            <NavBar />
            <Outlet />
        </>
    )
}