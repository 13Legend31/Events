import React, { Component } from 'react'
import { connect } from 'react-redux'

import Action from '../../Redux/Action'

import Nav from '../../Components/Nav/Nav'
import AddEventArea from '../../Components/AddEventArea/AddEventArea'
import EventsList from '../../Components/EventsList/EventsList'
import IconBar from '../../Components/IconBar/IconBar'

class FrontPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Nav/>
                <AddEventArea/>
                <EventsList/>
                <IconBar/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = () => ({})

const mapActionsToProps = {
    Action
}

export default connect(mapStateToProps, mapActionsToProps)(FrontPage)