export const setNewLocalstorage = (inputName, selectedValue, storageKey) => {
    const prefillData = window.localStorage.getItem('prefillData') || []

    try {
        const parsedData = JSON.parse(prefillData)
        parsedData[0][storageKey][inputName] = selectedValue
        window.localStorage.setItem('prefillData', JSON.stringify(parsedData))
    }
    catch (error) {
        throw new Error(error)
    }
}