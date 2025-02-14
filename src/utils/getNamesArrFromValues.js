const getNamesArrFromValues = (obj, objValuesArr) => {
    const allEntries = Object.entries(obj)

    const names = allEntries.reduce((accum, item) => {
        if (objValuesArr.includes(item[1])) {
            accum.push(item[0])
        }
        return accum
    }, [])

    return names
}
export default getNamesArrFromValues
