import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Grid } from 'react-bootstrap'
import Intro from "../blocks/Intro";

// code
export default class Main extends Component {

    state = {
        page_text_content: []
    };

    async componentWillMount() {
        try {
            const sourceFile = require('../common');
            const text_content = await fetch(
                sourceFile.hostname + 
                "/main_page_content"
            );

            const json_data = await text_content.json();
            const page_text_content = json_data[0]['data_ru'];

            this.setState({page_text_content});
        } catch (e) {
            console.log(e);
        }
    }
    //await text_content.json();
//
    render() {
        return (
            <Router>
                <Grid fluid={true} className="head-margin">
                    <Intro page_text_content={this.state.page_text_content}/>
                </Grid>
            </Router>
        )
    }
}
