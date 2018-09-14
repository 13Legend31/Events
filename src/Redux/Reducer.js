function Reducer(state = {}, { type, payload}) {
    const newState = {...state}
    newState[type] = payload
    return newState
}

export default Reducer