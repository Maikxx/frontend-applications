export const getLocalstorageValue = (storageKey, storageIndex) => {
    const prefillData = window.localStorage.getItem('prefillData')

    try {
        const parsedData = JSON.parse(prefillData)
        return parsedData[0][storageKey][storageIndex]
    } catch (error) {
        throw new Error(error)
    }
}