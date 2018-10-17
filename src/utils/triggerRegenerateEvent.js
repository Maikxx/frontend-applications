export const triggerRegenerateEvent = () => {
    try {
        window.localStorage.setItem('factorData', JSON.stringify(window.factorData))
        document.dispatchEvent(new Event('regenerateFactorData'))
    } catch (error) {
        throw new Error(error)
    }
}