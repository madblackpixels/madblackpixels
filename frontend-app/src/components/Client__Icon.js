import React, { Component } from 'react'

// bootstrap
import { Col, Image } from 'react-bootstrap'

// logic
import { static_getImage } from '../logic/General_Common'


// code
export default class Client__Icon extends Component {

    render() {

        return(
            <Col xs={6} sm={4} md={4} lg={4}>
                <a href={'/'} className="link-client-logo">

                    <img src={this.props.client.logo_black} className="client-logo__black"
                        onMouseEnter={() => {
                            this.setState({
                                client_logo: static_getImage('/clients/' + this.props.client + '_color.png')
                            })
                        }}

                        onMouseOut={() => {
                            this.setState({
                                client_logo: static_getImage('/clients/' + this.props.client + '_black.png')
                            })
                        }}
                    />

                </a>
            </Col>
        )
    }

}