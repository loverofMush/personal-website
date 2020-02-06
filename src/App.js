import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Sidebar from './components/Sidebar'
import MainContainer from './components/MainContainer'
import Footer from './components/Footer'

function App() {
  return (
    <div className="container content-container">
      <div className="content">
        <Row className="justify-content-md-center">
          <Col xs="12" lg="3">
            <Sidebar />
          </Col>
          <Col xs="12" lg="8">
            <MainContainer />
          </Col>
        </Row>
        <Footer />
      </div>
    </div>
  );
}

export default App;
