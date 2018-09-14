import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom'
import './index.css'

import Reducer from './Redux/Reducer'
import App from './App'

const store = createStore(
    Reducer,
    {
        events:[] // [{},{},{},{},{}] { date: date, events: [] } dont convert to date or time
    }
)

render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)