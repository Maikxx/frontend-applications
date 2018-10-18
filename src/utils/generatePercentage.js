export const generatePercentage = (nameFactorCombinations) => {
    if (!nameFactorCombinations) {
        return 0
    }

    const accumulatedValue = nameFactorCombinations
        .map(nameFactorCombination => nameFactorCombination.value)
        .reduce((adder, currentValue) => adder + currentValue, 0)

    // Folkert-Jan
    return Number((1 / (1 + Math.exp(-1 * (-8.57219 + accumulatedValue))) * 100).toFixed(2))
}