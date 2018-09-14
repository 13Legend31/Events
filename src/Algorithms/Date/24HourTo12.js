function Conversion(time) {
    const t = time.split(':')
    const min = parseInt(t[1], 10)
    let hour = parseInt(t[0], 10)
    const suffix = hour < 13 ? 'AM' : 'PM'
    hour = hour < 13 ? hour : hour - 12

    let converted = `${hour}:${min < 10 ? `0${min}` : min} ${suffix}`
    return converted
}

export default Conversion