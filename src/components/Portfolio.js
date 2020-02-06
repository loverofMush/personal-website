import React from 'react';
import '../css/portfolio.css'

function Portfolio() {
    let img01 = require( '../images/inTree.png')
    let img02 = require( '../images/lukrativ.png')
    let img03 = require( '../images/larissagideon.png')
    return(
        <>
        <h1>My Projects</h1>
        <p>Below you"ll find some of the projects I have worked on as a freelance developer</p>
        <div className="row">
            <div className="img-margin col-lg-6 col-sm-12">
                <div className="img-container">
                    {/* <h3 className="img-title">Text fadeIn bottom</h3> */}
                    <div className="img-content">
                        <div className="img-wrapper">
                            <div className="img-content-overlay"></div>
                            <img className="img-content-image" src={img01} alt="inventory-management-app"/>
                            <div className="img-content-details fadeIn-bottom">
                                <h5 className="img-content-title">inTree.</h5>
                                <p>
                                    <a href="https://intree-demo.herokuapp.com" 
                                        target="_blank" 
                                        className="img-content-text"
                                    >
                                        View Project
                                    </a>
                                </p>
                                <dd>email: hills.lauretta@xo.com</dd>
                                <dd>password: password</dd>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="img-margin col-lg-6 col-sm-12">
                <div className="img-container">
                    {/* <h3 className="img-title">Text fadeIn bottom</h3> */}
                    <div className="img-content">
                        <div className="img-wrapper">
                            <div className="img-content-overlay"></div>
                            <img className="img-content-image" src={img02} alt="inventory-management-app"/>
                            <div className="img-content-details fadeIn-bottom">
                                <h5 className="img-content-title">lukrativ.io</h5>
                                <p>
                                    <a href="https://lukrativ.herokuapp.com" 
                                        target="_blank" 
                                        className="img-content-text"
                                    >
                                        View Project
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="img-margin col-lg-6 col-sm-12">
                <div className="img-container">
                    {/* <h3 className="img-title">Text fadeIn bottom</h3> */}
                    <div className="img-content">
                        <div className="img-wrapper">
                            <div className="img-content-overlay"></div>
                            <img className="img-content-image" src={img03} alt="inventory-management-app"/>
                            <div className="img-content-details fadeIn-bottom">
                                <h5 className="img-content-title">larissagideon.com</h5>
                                <p>
                                    <a href="http://www.larissagideon.com" 
                                        target="_blank" 
                                        className="img-content-text"
                                    >
                                        View Project
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Portfolio