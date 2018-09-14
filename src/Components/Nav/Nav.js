import React, { Component } from 'react'
import './Nav.css'

import ClickableLogo from './ClickableLogo/ClickableLogo'

class Nav extends Component {
    render() {
        return (
            <section className='nav'>
                <div className='navClickableLogoWrapper'>
                    <ClickableLogo/>
                </div>
                <div className='navBackground'/>
            </section>
        );
    }
}

export default Nav;