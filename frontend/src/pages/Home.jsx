/* eslint-disable no-unused-vars */
import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Corousel from '../components/Corousel'

export default function Home() {
    return (
        <>
            <div> <NavBar /> </div>
            <div> <Corousel/> </div>
            <div className="m-3"> <Card /> </div>
            <div className="m-3"> <Card /> </div>
            <div className="m-3"> <Card /> </div>
            <div> <Footer /> </div>
        </>
    )
}
