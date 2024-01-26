import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Corousel from '../components/Corousel'
export default function () {
    return (
        <>
            <div> <NavBar /> </div>
            <div> <Corousel/> </div>
            <div> <Card /> </div>
            <div> <Footer /> </div>
        </>
    )
}
