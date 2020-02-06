import React from 'react';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../css/skills.css';

// const javascript = require( '../images/javascript-js.svg')
// const php = require( '../images/php.svg')
// const python = require( '../images/python.svg')

const styles = {
    marginTop: "30px"
}

function Skills() {
    return(
        <div>
            <h2 className="heading">Technologies</h2>
            <hr className="divider"/>
            <Row style={styles}>
                <Col xs="12" lg="6">
                    <h6 className="tech">Day-to-Day tools</h6>
                    <ul className="frames">
                        {/* <fig>
                            <img src={javascript} alt="javascript" style={styles}/>
                        </fig> */}
                        
                        <li className="frame"><a>HTML5 / CSS3</a></li>
                        <li className="frame"><a>Vue</a></li>
                        <li className="frame"><a>React</a></li>
                        <li className="frame"><a>Laravel</a></li>
                        <li className="frame"><a>PostgreSQL</a></li>
                        <li className="frame"><a>MySQL</a></li>
                    </ul>
                </Col>
                <Col xs="12" lg="6">
                    <h6 className="tech">Limited use</h6>
                    <ul className="frames">
                        {/* <img src={php} alt="php" style={styles}/> */}
                        <li className="frame"><a>Angular</a></li>
                        <li className="frame"><a>Django</a></li>
                        <li className="frame"><a>CodeIgniter</a></li>
                    </ul>
                </Col>
            </Row>
        </div>
    )
}

export default Skills
