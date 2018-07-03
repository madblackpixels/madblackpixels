import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// bootstrap
import { Grid } from 'react-bootstrap'

// system general blocks
import SiteHeader from './blocks/General/General_SiteHeader'
import SlideMenu  from './blocks/General/General_SlideMenu'
import Footer     from './blocks/General/General_SiteFooter'

// pages
import MainPage from './pages/MainPage'


// code
export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            siteLang : 'data_ru',
            menuOpen : false,
        };

        this.update_AppStates = this.update_AppStates.bind(this);
    };


    update_AppStates(event) {
        this.setState(event);
    };


    render() {

        return(
             <Grid fluid={true} className="no-padding">
                 <SiteHeader  update_AppStates={this.update_AppStates.bind(this)} />
                 <SlideMenu   update_AppStates={this.update_AppStates.bind(this)} menuOpen={this.state.menuOpen} />

                 <Switch>
                     <Route path='/'
                         render={
                             (props) => <MainPage {...props} lang={this.state.siteLang} />
                         }
                     />
                 </Switch>

                 <Footer />
             </Grid>
        )
    };
}
