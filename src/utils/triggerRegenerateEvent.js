export const triggerRegenerateEvent = () => {
    try {
        window.localStorage.setItem('nameFactorCombinations', JSON.stringify(window.nameFactorCombinations))
        document.dispatchEvent(new Event('regenerateNameFactorCombinations'))
    } catch (error) {
        throw new Error(error)
    }
}