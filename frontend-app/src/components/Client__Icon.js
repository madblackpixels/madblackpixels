import React, { Component } from 'react'

// bootstrap
import { Col, Image } from 'react-bootstrap'

// logic
import { static_getImage } from '../logic/General_Common'


// code
export default class Client__Icon extends Component {

    imageBlack = '/clients/' + this.props.client + '_black.png';
    imageColor = '/clients/' + this.props.client + '_color.png';

    client_logoBlack = static_getImage(this.imageBlack)
    client_logoColor = static_getImage(this.imageColor)

    render() {

        return(
            <Col xs={6} sm={4} md={4} lg={4}>
                <a href={'/'} className="link-client-logo">
                    <img src={this.client_logoBlack} className="client-logo__black"
                        onMouseOver={this.src = this.client_logoColor}
                        onMouseOut={this.src = this.client_logoBlack}
                    />





                </a>
            </Col>
        )
    }

}