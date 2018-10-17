export const setFactorValue = (inputName, factor) => {
    const { nameFactorCombinations } = window || []
    const nameFactorCombinationIndex = nameFactorCombinations.findIndex(nameFactorCombination => nameFactorCombination.name === inputName)
    const factorByInputName = nameFactorCombinations[nameFactorCombinationIndex]

    factorByInputName.value = factor
}