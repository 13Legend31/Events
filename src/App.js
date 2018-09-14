import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Action from './Redux/Action'
import Routes from './Routes/Routes'

class App extends Component {
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