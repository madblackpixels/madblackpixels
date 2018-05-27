import React, { Component } from 'react'

import { Button, ButtonGroup } from 'react-bootstrap'

// code
export default class LangButton extends Component {

    langChoice = (event) => {
        this.props.changeLang({
            siteLang: event.target.attributes.getNamedItem('lang').value
        })
    }

    render() {
        return(
            <ButtonGroup onClick={this.langChoice.bind(this)} className="btn-group__lang">
                <Button lang='data_ru' className="btn__lang">RU</Button>
                <Button lang='data_en' className="btn__lang">EN</Button>
            </ButtonGroup>
        )
    }
}