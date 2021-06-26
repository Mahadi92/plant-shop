import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';
import headerSofa from '../../images/sofa-lamp.png'

const Header = () => {
    return (
        <header className="pb-5">
            <Navbar />
            <div className="h-100">
                <div className="row w-100 h-100">
                    <div className="col-md-5 px-5 text-light">
                        <div className="mt-5">
                            <h1>Furniture that</h1>
                            <h1>everyone</h1>
                            <h1>Loves</h1>
                            <p className="pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ea amet voluptate enim? Quidem, consectetur.
                            </p>
                            <div className="mt-5">
                                <button className="btn btn-custom px-4">Buy Now</button>
                                <button className="btn rounded-pill text-light border border-white ms-3 px-4">Explore</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 d-flex align-items-end">
                        <img src={headerSofa} className="w-100" width="" alt="" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;