import React from 'react';
import './Products.css';
import imageChair from '../../images/Chair 2.png';
import tree from '../../images/Tree.png';
import tree2 from '../../images/Tree 2.png';

const Products = () => {
    return (
        <section className="my-5 pt-5">
            <div className="row px-5 w-100">
                <div className="col-md-3">
                    <div class="card border-0">
                        <div class="card-body">
                            <h2>Why we are <br /> best in our <br /> Town</h2>
                            <p class="card-text mt-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p class="ms-3 mt-5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="color-primary" width="45px" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                                </svg>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card border-0 card-custom">
                        <div className="p-4">
                            <img src={imageChair} class="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                            <p class="card-text text-center">
                                <p className="fw-bold">White Chair <br /> with metal</p>
                                <h3 className="fw-bolder">$36</h3>
                            </p>

                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card border-0 card-custom">
                        <div className="p-4">
                            <img src={tree} class="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                            <p class="card-text text-center">
                                <p className="fw-bold">White Chair <br /> with metal</p>
                                <h3 className="fw-bolder">$36</h3>
                            </p>

                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card border-0 card-custom">
                        <div className="p-4">
                            <img src={tree2} class="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                            <p class="card-text text-center">
                                <p className="fw-bold">White Chair <br /> with metal</p>
                                <h3 className="fw-bolder">$36</h3>
                            </p>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Products;