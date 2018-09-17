import React, { Component } from 'react'
import { connect } from 'react-redux'
import './SaveEvents.css'

class SaveEvents extends Component {
    state = {
        areYouSure:false
    }

    AreYouSure = () => {
        this.setState({areYouSure: true})
    }

    SaveToDatabase = () => {
        const { events } = this.props
        fetch(`http://localhost:1337/`, {
            method:'POST',
            body:JSON.stringify(events),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then((data) => data.json())
        .then((data) => {
            if (data.success) {
                alert('Successfully saved to database')
            }
            else {
                alert('Oops, something went wrong!')
            }
            this.setState({areYouSure:false})
        })
        .catch(() => {
            alert('Sorry, API is down')
            this.setState({areYouSure:false})
        })
    }

    render() {
        return (
            <section className='saveEvents'>
            {!this.state.areYouSure &&
                <button 
                    className='saveAllEventsButton'
                    onClick={this.AreYouSure}
                >
                    Save Events To Database
                </button>
            }
            {this.state.areYouSure &&
                <button 
                    className='areYouSureButton'
                    onClick={this.SaveToDatabase}
                >
                    Are you sure?
                </button>
            }
            </section>
        );
    }
}

const mapStateToProps = ({ events }) => ({
    events
})

export default connect(mapStateToProps)(SaveEvents)