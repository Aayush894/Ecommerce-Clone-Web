/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Corousel from '../components/Corousel'

export default function Home() {
    const [search, setSearch] = useState('');
    const [foodCategory, setFoodCategory] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/foodData", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        response = await response.json();

        // console.log(response[0], response[1]);

        setFoodItem(response[0]);
        setFoodCategory(response[1]);
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <>
            <div> <NavBar /> </div>
            <div>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-caption" style={{ zIndex: "10" }}>
                            <div className="d-flex justify-content-center">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                                {/* <button className="btn btn-success text-white" type="submit">Search</button> */}
                            </div>
                        </div >
                        <div className="carousel-item">
                            <img src="https://imgs.search.brave.com/zEPTGbKdxZ2oy23UwdTbLPYKtvQM4J3FN-MmXk9WP3E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NjE3NTgwMzMtZDg5/YTlhZDQ2MzMwP3E9/ODAmdz0xMDAwJmF1/dG89Zm9ybWF0JmZp/dD1jcm9wJml4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4T0h4OFptRnpk/Q1V5TUdadmIyUjha/VzU4TUh4OE1IeDhm/REE9" className="rounded mx-auto d-block w-75 h-75 img-thumbnail img-fluid" style={{ filter: "brightness(50%)" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://imgs.search.brave.com/KXEBFie7H39G3QVlfAnNK7COU0-EBY8R3LJLBfuaWnA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MTIxNTIyNzI4Mjkt/ZTMxMzk1OTJkNTZm/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OFpt/RnpkQ1V5TUdadmIy/UjhaVzU4TUh4OE1I/eDhmREE9.jpeg" className="rounded mx-auto d-block w-75 h-75 img-thumbnail img-fluid" style={{ filter: "brightness(50%)" }} alt="..." />
                        </div>
                        <div className="carousel-item active">
                            <img src="https://imgs.search.brave.com/Naova8nLwOpl_7NOAFPe0mueVZBGhcfwkAVDMNWpDbs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MTA2MTQ4MTk1MTMt/NThlMzQ5ODk4NDhi/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRoOGZH/WmhjM1FsTWpCbWIy/OWtmR1Z1ZkRCOGZE/QjhmSHd3" className="rounded mx-auto d-block w-75 h-75 img-thumbnail img-fluid" style={{ filter: "brightness(50%)" }} alt="..." />
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="container">
                {
                    foodCategory.length !== 0 ?
                        foodCategory.map((data) => {
                            return (
                                <div className='row mb=3' key={data._id}>
                                    <div
                                        key={data._id}
                                        className="fs-3 m-3">{data.CategoryName}
                                    </div>
                                    <hr />
                                    {foodItem.length !== 0 ?
                                        foodItem.filter((item) => item.CategoryName === data.CategoryName && item.name.toLowerCase().includes(search.toLowerCase()))
                                            .map(filterItems => {
                                                return (
                                                    <div className="col-12 col-md-6 col-lg-3" key={filterItems._id}>
                                                        <Card
                                                            foodItem={filterItems}
                                                            options={filterItems.options[0]}
                                                        >
                                                        </Card>
                                                    </div>
                                                )
                                            }) :
                                        <div> No Such Data </div>}
                                </div>
                            )
                        })
                        : ""
                }
            </div>
            <div> <Footer /> </div>
        </>
    )
}