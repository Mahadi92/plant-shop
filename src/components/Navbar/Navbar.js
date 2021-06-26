import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg p-4 navbar-custom">
                <div class="container-fluid">
                    <a class="navbar-brand fw-bolder fs-3 text-light" href="#">Fando</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item text-light px-3">
                                <a class="nav-link text-light active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item text-light px-3">
                                <a class="nav-link text-light" href="#">About Us</a>
                            </li>
                            <li class="nav-item text-light px-3">
                                <a class="nav-link text-light" href="#">Furniture</a>
                            </li>
                            <li class="nav-item text-light px-3">
                                <a class="nav-link text-light" href="#">Blog</a>
                            </li>
                            <li class="nav-item text-light px-3">
                                <a class="nav-link text-light" href="#">Contact Us</a>
                            </li>
                            <li class="nav-item px-4 pe-5">
                                <button className="btn py-1 px-3 btn-custom">Log In</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;