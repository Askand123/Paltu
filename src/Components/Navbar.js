import React from "react";
import "./LoginForm/Login.css";
import "./SlidingPoster/SlidingPoster.css";

let FormBtn = document.querySelector("#user-btn");
let loginForm = document.querySelector(".login-form-container");
let FormClose = document.querySelector("#form-close");

window.onscroll = () => {
  loginForm.classList.remove("active");
};
FormBtn.addEventListener("click", () => {
  loginForm.classList.add("active");
});
FormClose.addEventListener("click", () => {
  loginForm.classList.remove("active");
});
export default function Navbar() {
  return (
    <>
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
            <a className="navbar-brand" href=".">
                Paltu - Online Shop for Pet Lovers
            </a>
            <i className="fas fa-user" id="user-btn"></i>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div
                className="offcanvas offcanvas-start bg-dark"
                tabindex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
            >
                <div className="offcanvas-header">
                <h5
                    className="offcanvas-title text-white"
                    id="offcanvasNavbarLabel"
                >
                    Menu
                </h5>
                <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                />
                </div>
                <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href=".">
                        Home
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href=".">
                        Option 2
                    </a>
                    </li>
                    <li className="nav-item dropdown">
                    <a
                        className="nav-link dropdown-toggle"
                        href="."
                        id="navbardarkDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Dropdown
                    </a>
                    <ul
                        className="dropdown-menu dropdown-menu-dark mb-5"
                        aria-labelledby="navbardarkDropdownMenuLink"
                    >
                        <li>
                        <a className="dropdown-item" href=".">
                            Option 3
                        </a>
                        </li>
                        <li>
                        <a className="dropdown-item" href=".">
                            option 4
                        </a>
                        </li>
                        <li>
                        <a className="dropdown-item" href=".">
                            option 5
                        </a>
                        </li>
                    </ul>
                    </li>
                </ul>
                <form className="d-flex mt-5">
                    <input
                    className="form-control me-2 bg-dark text-white"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                    Search
                    </button>
                </form>
                </div>
            </div>
            </div>
        </nav>
        <div className="login-form-container active">
            <i className="fas fa-times" id="form-close"></i>
            <form>
            <h3>Sign Up</h3>
            <input
                type="text"
                className="box"
                placeholder="Enter Your Full name"
                required
            />
            <input
                type="Number"
                className="box"
                placeholder="Enter Your Mobile No."
                required
            />
            <input
                type="email"
                className="box"
                placeholder="Enter Your email"
                required
            />
            <input
                type="date"
                class="box"
                placeholder="enter your date of birth"
                required
            />
            <input type="submit" value="Submit Now" className="btn" />
            </form>
        </div>
    </>
  );
}
