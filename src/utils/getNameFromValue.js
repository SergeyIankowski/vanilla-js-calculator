const getNameFromValue = (obj, value) => {
    const allEntries = Object.entries(obj)
    return allEntries.find((item) => value === item[1])[0]
}
export default getNameFromValue
