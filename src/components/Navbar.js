import React from 'react'
import '../css/navbar.css';
// import logo from '../loverofMush.svg';

function Navbar(props) {
    return(
        <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            {/* <ul className="nav-list">
                <li>Home</li>
                <li>Resume</li>
                <li>Work</li>
            </ul> */}
            <nav>
                { props.isRoute ? 
                    <a onClick={props.handleRoute} >Home</a> 
                    :
                    <a onClick={props.handleRoute} >Work</a> 
                }
                <a 
                    className="button" 
                    href="https://www.dropbox.com/s/kk9lj36vdllz5zo/Timothy%20Akinyelu%20IT%20CV.pages?dl=0"
                >
                    Download Resume
                </a>
                {/* <a  href className="current">Resume</a> */}
            </nav>
        </header>
    )
}

export default Navbar