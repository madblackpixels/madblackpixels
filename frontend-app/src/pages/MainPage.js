import React, { Component } from 'react'

//bootstrap
import { Grid } from 'react-bootstrap'

//blocks
import Main_IntroBlock   from '../blocks/Site/Main_IntroBlock'
import Main_LeadBlock    from '../blocks/Site/Main_LeadBlock'

// code
export default class MainPage extends Component {

    state = {
        content: {}
    };


    async getData() {
        try{
            const sourceFile = require('../common');
            const text_content = await fetch(
                sourceFile.hostname +
                "/main_page_content"
            );

            const json_data = await text_content.json();
            const content   = json_data[0][this.props.lang];

            this.setState({content});

        } catch (e) {
            console.log(e);
        }
    };


    componentWillMount() { this.getData() };
    componentWillReceiveProps(nextState) {
        if (this.state.content !== nextState.state) {
            this.getData()
        }
    };


    render() {

        return(
            <Grid fluid={true} className="no-padding">
                <Main_IntroBlock content={this.state.content}/>
                <Main_LeadBlock  content={this.state.content}/>
            </Grid>
        )
    }
}