export const setNewLocalstorage = (inputName, selectedValue, storageKey) => {
    const data = window.localStorage.getItem('data') || []

    try {
        const parsedData = JSON.parse(data)
        parsedData[0][storageKey][inputName] = selectedValue
        window.localStorage.setItem('data', JSON.stringify(parsedData))
    }
    catch (error) {
        throw new Error(error)
    }
}