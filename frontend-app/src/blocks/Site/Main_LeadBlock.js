import React, { Component } from 'react'

// bootstrap
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

// code
export default class Main_LeadBlock extends Component {

    render() {

        return(
            <Grid fluid={true} className="no-padding">
                <Grid className="block__container">
                    <h2 className="block__h2">{this.props.content.main_lead_title}</h2>
                    <Row className="block__contact">
                        <Col sm={12} md={10}>
                            <form>
                                <Col sm={12} md={6}>
                                    <FormGroup>
                                        <ControlLabel>{this.props.content.main_lead_input_name}</ControlLabel>
                                        <FormControl
                                            type="text"
                                            placeholder="Enter text"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col sm={12} md={6}>
                                    <FormGroup>
                                        <ControlLabel>{this.props.content.main_lead_input_mail}</ControlLabel>
                                        <FormControl
                                            type="text"
                                            placeholder="Enter text"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col sm={12}>
                                    <FormGroup controlId="formControlsTextarea">
                                        <ControlLabel>{this.props.content.main_lead_input_problem}</ControlLabel>
                                        <FormControl componentClass="textarea" placeholder="textarea" />
                                    </FormGroup>
                                </Col>
                            </form>
                        </Col>
                        <Col sm={12} md={2}>
                            hello@madblackpixels.com
                            join@madblackpixels.com
                        </Col>
                    </Row>
                </Grid>
            </Grid>
        )
    }
}