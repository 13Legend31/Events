function LessThan(time1, time2) {
    const t1 = time1.split(':')
    const h1 = parseInt(t1[0], 10)
    const m1 = parseInt(t1[1], 10)

    const t2 = time2.split(':')
    const h2 = parseInt(t2[0], 10)
    const m2 = parseInt(t2[1], 10)

    // check hour
    if (h1 < h2) {
        return true
    } else if (h1 > h2) {
        return false
    }

    // check minute
    if (m1 < m2) {
        return true
    } else if (m1 > m2) {
        return false
    } 
    return true
}

function Insert(dataStructure, event) {
    const date = event.date
    const time = event.time
    // date
    let i = 0
    for (i = 0; i < dataStructure.length && new Date(dataStructure[i].date) < new Date(date); i++);
    if (!dataStructure[i] || new Date(date) < new Date(dataStructure[i].date)) { // end of array or date doesn't exist
        dataStructure.splice(i, 0, {date, events:[]})
    }
    // time
    let j = 0
    for (j; j < dataStructure[i].events.length && LessThan(dataStructure[i].events[j].time, time); j++);
    dataStructure[i].events.splice(j, 0, event)
}

export default Insert