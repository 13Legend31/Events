import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import './index.css'

import Reducer from './Redux/Reducer'
import App from './App'

const store = createStore(
    Reducer,
    {
        events:[] // [{},{},{},{},{}] { date: date, events: [] } dont convert to date or time
        // [date][time]
    }
)

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)