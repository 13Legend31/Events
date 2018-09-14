import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Action from './Redux/Action'
import Routes from './Routes/Routes'

class App extends Component {
    render() {
        return (
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
        );
    }
}

const mapActionsToProps = {
    Action
}

export default connect(() => ({}), mapActionsToProps)(App)