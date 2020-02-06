import React from 'react';
import '../css/about.css';

function About() {
    const divStyle = {
        marginTop: "30px"
    }

    return(
        <div>
            <h2 className="heading">About Me</h2>
            <hr id="about" className="divider"/>
            <div style={divStyle}>
                <p id="info">I like the color red, and in-love with a lady called Red.
                    <br/>
                    <br/>
                    I like to keep it simple but also like to explore several ways of achieving a result.
                    <br/>
                    My goal for every app is to convey a clear and direct message to users.
                </p>
            </div>
        </div>
    )
}

export default About