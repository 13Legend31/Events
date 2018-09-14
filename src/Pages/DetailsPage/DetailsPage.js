import React, { Component } from 'react'

import Nav from '../../Components/Nav/Nav'
import EventDetails from '../../Components/EventDetails/EventDetails'
import IconBar from '../../Components/IconBar/IconBar'

class DetailsPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Nav/>
                <EventDetails/>
                <IconBar/>
            </React.Fragment>
        );
    }
}

export default DetailsPage;