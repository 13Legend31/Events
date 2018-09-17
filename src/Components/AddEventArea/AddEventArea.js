import React, { Component } from 'react'
import './AddEventArea.css'

import EventForm from './EventForm/EventForm'
import SaveEvents from './SaveEvents/SaveEvents'

class AddEventArea extends Component {
    state = {
        addEvent:false
    }
    
    ShowEventAdder = () => {
        const state = this.state
        state.addEvent = !state.addEvent
        this.setState(state)
    }

    render() {
        const { addEvent } = this.state
        return (
            <section className='addEventArea'>
                <div className='addEventButtonWrapper'>
                    <button
                        className='addEventButton'
                        onClick={this.ShowEventAdder}
                    >
                        {addEvent ? '-' : '+'}
                    </button>
                </div>
                {this.state.addEvent &&
                    <div className='eventFormWrapper'>
                        <EventForm/>
                    </div>
                }
                <SaveEvents/>
            </section>
        );
    }
}

export default AddEventArea