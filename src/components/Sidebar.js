import React from 'react'
import '../css/sidebar.css';
// import avatar from '../images/loverofMush.png'

function Sidebar() {
    let avatar = require( '../images/loverofMush.png')
    // let introImg = require( '../images/nameImg.png')

    const ulStyles = {
        paddingLeft: 0,
        display: "flex",
        justifyContent: "center"
    }

    return (
        <aside className="container sideNav">
            <section className="avatar-header">
                <div className="avatar-wrapper">
                    <img src={avatar} className="avatar" alt="logo" />
                </div>
            </section>
            <section>
                <div className="bio">
                    <div className="bio-inner">
                        <h2>Hi,</h2>
                    </div>
                    <h2 className="intro">
                        <p>I'm <span>Timothy</span></p>
                        {/* <figure>
                            <img src={introImg} alt="intro" />
                        </figure> */}
                    </h2>
                    <div className="locale">  
                        <p id="bio-text">A web developer based in Lagos, Nigeria.
                            I love creating beautiful and functional mobile-first web applications.
                        </p>
                    </div>
                    <div className="socials">
                        <ul style={ulStyles}>
                            <li id="fonts-1">
                                <a href="https://www.instagram.com/jamalakinyelu">
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </li>
                            <li id="fonts">
                                <a href="https://twitter.com/loverofMush">
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li id="fonts">
                                <a href="https://github.com/loverofMush">
                                    <i className="fa fa-github"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="contact">
                        <button className="btn btn-contact">Email Tim</button>
                    </div>
                </div>
            </section>
        </aside>
    )
}

export default Sidebar