import React, { Component } from 'react'

// bootstrap
import { Row, Col, Image, Modal } from 'react-bootstrap'


// code
export default class Lead__ModalFeedback extends Component {

    hideModal = () => {
        this.props.update_leadStates({showModal: false});
    };

    render() {

        return(
            <Modal
                show={this.props.showModal}
                onHide={this.hideModal}
                container={this}
                aria-labelledby="contained-modal-title" >

                <Modal.Title id="contained-modal-title" >
                    <Row>
                        <Col xs={2} sm={3} className="border-right__yellow lead-modal__small_fixed">
                            <Image src="/system/site_logo/logo-black.png" className="brand-logo__modal" />
                        </Col>
                        <Col xs={10} sm={9} className="lead-modal__small_adaptive">
                            <button className="close" type="button" onClick={this.hideModal}>
                                <span aria-hidden="true">×</span>
                                <span className="sr-only">Close</span>
                            </button>
                            <p className="modal-feedback__text">{this.props.content.main_lead_modal_feedback}</p>
                        </Col>
                    </Row>
                </Modal.Title>
            </Modal>
        )
    }
}