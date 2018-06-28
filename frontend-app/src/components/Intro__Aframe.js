import React, { Component } from 'react'

// A-frame for VR
import 'aframe'
import 'aframe-particle-system-component';
import {Entity, Scene, Camera } from 'aframe-react';


// code
export default class Intro__Aframe extends Component {

    render() {

        return(
            <Scene embedded={true} cursor={'rayOrigin: mouse'} >
                <Entity
                    particle-system={{
                        preset: 'dust',
                        particleCount: 5000,
                        color: '#353535',
                    }}
                />
            </Scene>

        )
    }
}

