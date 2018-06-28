import React, { Component } from 'react'

// bootstrap
import { Image } from 'react-bootstrap'


// code
export default class Header__SiteLogo extends Component {

    render() {

        return(
             <a href={'/'}>
                 <Image src="/system/header/logo-black.png" className="brand-logo__header brand-logo__black" />
                 <Image src="/system/header/logo-white.png" className="brand-logo__header brand-logo__white" />
             </a>
        )
    }
}