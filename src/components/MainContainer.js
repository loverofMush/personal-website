import React, { Component } from 'react'
import '../css/main-container.css';

import Navbar from './Navbar'
import About from './About'
import Skills from './Skills'
import Portfolio from './Portfolio'

class MainContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isRoute: false
        }

        this.handleRoute = this.handleRoute.bind(this)
    }

    handleRoute() {
        this.setState((state) => {
            return {
                isRoute: !state.isRoute
            }
        })
    }

    render() {
        return (
            <section className="main-content">
                <Navbar 
                    isRoute={ this.state.isRoute }
                    handleRoute={this.handleRoute}/>
                    { this.state.isRoute ? 
                    <Portfolio />
                    :
                    <div>
                        <About />
                        <Skills />
                    </div>
                }
            </section>
        )
    }
}

export default MainContainer