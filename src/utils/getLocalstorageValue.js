export const getLocalstorageValue = (storageKey, storageIndex) => {
    const data = window.localStorage.getItem('data')

    try {
        const parsedData = JSON.parse(data)
        return parsedData[0][storageKey][storageIndex]
    } catch (error) {
        throw new Error(error)
    }
}