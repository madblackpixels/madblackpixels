import React, { Component } from 'react'

// bootstrap
import { Grid } from 'react-bootstrap'

// components
import Intro__Aframe from '../../components/Intro__Aframe'


// code
export default class IntroBlock extends Component {

    state = {
        data: {}
    };


    async getData() {
        try{
            const sourceFile = require('../../common');
            const text_content = await fetch(
                sourceFile.hostname +
                "/main_page_content"
            );

            const json_data = await text_content.json();
            const data = json_data[0][this.props.lang];

            this.setState({data});

        } catch (e) {
            console.log(e);
        }
    };


    componentWillMount() { this.getData() };
    componentWillReceiveProps(nextProps) {
        if (this.props.lang !== nextProps.lang) {
            this.getData()
        }
    };


    render() {

        return(
            <Grid fluid={true} className="full-screen-height intro-block__margin no-padding">

                <Intro__Aframe />

                <Grid className="intro-block">
                    <h1 className="intro-block__h1">{this.state.data.main_title}</h1>
                    <h2 className="intro-block__h2">{this.state.data.main_sub_title}</h2>
                </Grid>

            </Grid>
        )
    }
}