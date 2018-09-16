import { monthNames, dayNames } from '../../Enums/Date/DateNames'

function MakeReadable(date) {
    const day = dayNames[date.getDay()]
    const month = monthNames[date.getMonth()]
    const dateNum = date.getDate()
    return `${day}, ${month} ${dateNum}`
}

export default MakeReadable