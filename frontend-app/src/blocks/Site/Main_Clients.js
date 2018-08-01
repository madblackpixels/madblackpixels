import React, { Component } from 'react'

// bootstrap
import { Grid, Row, Col } from 'react-bootstrap'

// components
import Client__Icon   from '../../components/Client__Icon'


// code
export default class Main_Clients extends Component {

    render(){

        return(

            <Grid fluid={true} className="no-padding">

                <Grid className="block__container" >
                    <h2 className="block__h2 position-right__text">Клиенты</h2>
                    <Row className="block__lead">
                        <Client__Icon client="q-expert"/>
                        <Client__Icon client="mail"/>
                        <Client__Icon client="skit"/>
                    </Row>
                </Grid>

            </Grid>
        )
    }
}