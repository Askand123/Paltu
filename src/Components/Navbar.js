import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
            <a className="navbar-brand" href=".">Paltu - Online Shop for Pet Lovers</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-start bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href=".">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href=".">Option 2</a>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbardarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </a>
                <ul class="dropdown-menu dropdown-menu-dark mb-5" aria-labelledby="navbardarkDropdownMenuLink">
                    <li><a class="dropdown-item" href="#">Option 3</a></li>
                    <li><a class="dropdown-item" href="#">option 4</a></li>
                    <li><a class="dropdown-item" href="#">option 5</a></li>
                </ul>
                </li>
                </ul>
                <form className="d-flex mt-5">
                <input className="form-control me-2 bg-dark text-white" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            </div>
        </div>
</nav>
    );
}
