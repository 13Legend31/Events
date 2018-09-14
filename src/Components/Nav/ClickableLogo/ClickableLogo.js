import React, { Component } from 'react'
import './ClickableLogo.css'

class ClickableLogo extends Component {
    render() {
        return (
            <div 
                className='clickableLogo'
            >
                <div className='momentifyIcon'/>
                <h1 className='momentifyTitle'>Momentify</h1>
            </div>
        );
    }
}

export default ClickableLogo