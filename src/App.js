import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { events } from './Redux/Constants'

import Action from './Redux/Action'
import Routes from './Routes/Routes'

class App extends Component {
    componentDidMount = () => {
        fetch('https://momentifyapi.herokuapp.com/')
        .then(data => data.json())
        .then(data => {
            if (data) {
                this.props.Action(data, events)
            } else {
                alert('Sorry, something went wrong!')
            } 
        })
        .catch(() => alert('Sorry API down'))
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {Routes.map(({ path, component, exact }) =>
                        <Route
                            key={path}
                            path={path}
                            component={component}
                            exact={exact}
                        />
                    )}
                </Switch>
            </BrowserRouter>
        );
    }
}

const mapActionsToProps = {
    Action
}

export default connect(() => ({}), mapActionsToProps)(App)