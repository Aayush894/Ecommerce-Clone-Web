
export default function Corousel() {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
               
                <div className="carousel-inner">
                    <div className="carousel-caption" style={{zIndex:"10"}}>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-success text-white" type="submit">Search</button>
                        </form>
                    </div >
                    <div className="carousel-item">
                        <img src="https://imgs.search.brave.com/Lgikoly4zPi5wBk_68H3CC1ezcmVL6wogwjIxO4U8kg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by90YWJsZS1mdWxs/LWZvb2QtaW5jbHVk/aW5nLWJ1cmdlcnMt/ZnJpZXMtb3RoZXIt/Zm9vZHNfODczOTI1/LTc0OTQuanBnP3Np/emU9NjI2JmV4dD1q/cGc" className="rounded mx-auto d-block w-75 h-75 img-thumbnail img-fluid" style={{filter: "brightness(50%)"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://imgs.search.brave.com/KXEBFie7H39G3QVlfAnNK7COU0-EBY8R3LJLBfuaWnA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MTIxNTIyNzI4Mjkt/ZTMxMzk1OTJkNTZm/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OFpt/RnpkQ1V5TUdadmIy/UjhaVzU4TUh4OE1I/eDhmREE9.jpeg" className="rounded mx-auto d-block w-75 h-75 img-thumbnail img-fluid" style={{filter: "brightness(50%)"}} alt="..." />
                    </div>
                    <div className="carousel-item active">
                        <img src="https://imgs.search.brave.com/Naova8nLwOpl_7NOAFPe0mueVZBGhcfwkAVDMNWpDbs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MTA2MTQ4MTk1MTMt/NThlMzQ5ODk4NDhi/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRoOGZH/WmhjM1FsTWpCbWIy/OWtmR1Z1ZkRCOGZE/QjhmSHd3" className="rounded mx-auto d-block w-75 h-75 img-thumbnail img-fluid" style={{filter: "brightness(50%)"}} alt="..." />
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
    )
}
