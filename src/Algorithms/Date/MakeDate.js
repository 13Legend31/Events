function MakeDate(input) {
    const info = input.split('-')
    const year = parseInt(info[0], 10)
    const month = parseInt(info[1], 10) - 1
    const day = parseInt(info[2], 10)
    return new Date(year, month, day)
}

export default MakeDate