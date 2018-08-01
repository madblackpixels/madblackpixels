import React, { Component } from 'react'
import { getSimpleData }    from '../logic/General_ApiReq'

//bootstrap
import { Grid } from 'react-bootstrap'

//blocks
import Main_IntroBlock   from '../blocks/Site/Main_IntroBlock'
import Main_LeadBlock    from '../blocks/Site/Main_LeadBlock'
import Main_Clients      from '../blocks/Site/Main_Clients'

// code
export default class MainPage extends Component {

    state = {
        content: {},
    };


    updateContent() {
        getSimpleData("/main_page_content").then(result => this.setState({
            content: result[this.props.lang]
        }))
    }


    componentWillMount() {
        this.updateContent()
    };

    componentWillReceiveProps(nextState) {
        if (this.state.content !== nextState.state) {
            this.updateContent()
        }
    }


    render() {

        return(
            <Grid fluid={true} className="no-padding">
                <Main_IntroBlock content={this.state.content}/>
                <Main_Clients content={this.state.content}/>
                <Main_LeadBlock  content={this.state.content} addNotification={this.props.addNotification}/>
            </Grid>
        )
    }
}