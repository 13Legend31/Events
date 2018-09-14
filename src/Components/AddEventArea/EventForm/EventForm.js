import React, { Component } from 'react'
import { connect } from 'react-redux'
import './EventForm.css'

import Action from '../../../Redux/Action'
import Insert from '../../../Algorithms/Events/Insert'

import { events } from '../../../Redux/Constants'

const type = [
    'name',
    'date',
    'time',
    'location'
]

const originalState = {
    name:'',
    date:'',
    time:'',
    location:'',
    description:'' // need specialized
}

class EventForm extends Component {
    state = {
        ...originalState
    }

    ModifyDetails = (key, value) => {
        const state = this.state
        if (value.length < 1000) {
            state[key] = value
            this.setState(state)
        }
    }

    AddEvent = () => {
        const eventDetails = this.state
        Insert(this.props.events, eventDetails)
        this.setState({...originalState})
        this.props.Action([...this.props.events], events)
    }

    render() {
        return (
            <section className='eventForm'>
                {type.map((type) => {
                    let inputType = 'text'
                    if (type === 'date') {
                        inputType = 'date'
                    } else if (type === 'time') {
                        inputType = 'time'
                    }
                    return (
                        <input
                            key={type}
                            className='eventFormInput'
                            placeholder={type}
                            type={inputType}
                            value={this.state[type]}
                            onChange={(e) => this.ModifyDetails(type, e.target.value)}
                        />
                    )
                })}
                <textarea 
                    className='eventFormDescription'
                    value={this.state.description}
                    placeholder='Description'
                    onChange={(e) => this.ModifyDetails('description', e.target.value)}
                />
                <button
                    className='eventFormSave'
                    onClick={this.AddEvent}
                >
                    Save
                </button>
            </section>
        );
    }
}

const mapStateToProps = ({ events }) => ({
    events
})

const mapActionsToProps = {
    Action
}

export default connect(mapStateToProps, mapActionsToProps)(EventForm)