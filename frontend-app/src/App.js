import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// blocks
import MenuBar from './blocks/MenuBar'
import Header  from './blocks/Header'
import Main    from './pages/Main'

// code
export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen:   false,
            siteLang: 'data_ru'
        }
    }

    updateData(config) {
        this.setState(config)
    }

    render() {
        return(
            <Router>
                <div>
                    <Header changeLang={this.updateData.bind(this)} showMenu={this.updateData.bind(this)} />
                    <MenuBar isOpen={this.state.isOpen} />
                    <Main siteLang={this.state.siteLang}/>
                </div> 
            </Router>
        )
    }
}
