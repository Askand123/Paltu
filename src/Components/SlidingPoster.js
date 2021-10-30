import React from 'react'
import '../SlidingPoster.css'

export default function SlidingPoster() {
    return (
        <div>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                    <img src="https://th.bing.com/th/id/OIP.4SBkM9ooTiXHWpAXh7yQPgHaE4?pid=ImgDetrs=1" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Paltu</h1>
                        <h4 className="text-white">Paltu is the India's first online pet shop for selling and buying pets and we sells World's best food and accesories for your pet at affordable prize </h4>
                    </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                    <img src="https://img.chewy.com/is/image/catalog/62044_PT2._AC_SL1500_V1595560274_.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Pets Catogries</h1>
                        <h4 className="text-white">we sell all the pets from lion to rats and all the variety at affordable prize and if you want you can sell your pet to us and we will leave them at there natural place</h4>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src="https://th.bing.com/th/id/OIP.35dX1zccGj1dxYZBvKuEbQHaEK?pid=ImgDetrs=1" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Slogan</h1>
                        <h4 className="text-white">Our Slogan is to give you everything you want for your pet from cloths to soap everything at affordable prize to your doorsteps</h4>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
