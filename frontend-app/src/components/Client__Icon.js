import React, { Component } from 'react'

// bootstrap
import { Col, Image } from 'react-bootstrap'

// logic
import { media_fileURL } from '../logic/General_Common'

//onMouseEnter={() => {
//                             this.setState({
//                                 client_logo: media_fileURL('/clients/' + this.props.client + '_color.png')
//                             })
//                         }}
//
//                         onMouseOut={() => {
//                             this.setState({
//                                 client_logo: media_fileURL('/clients/' + this.props.client + '_black.png')
//                             })
//                         }}
// code
export default class Client__Icon extends Component {

    state = {
        image_url : media_fileURL(this.props.client.logo_black),
    };

    render() {
        console.log(this.state.image_url)
        return(
            <Col xs={6} sm={4} md={4} lg={4}>
                <a href={'/'} className="link-client-logo">

                    <Image src={this.props.client.logo_black} className="client-logo__black"

                    />

                </a>
            </Col>
        )
    }

}